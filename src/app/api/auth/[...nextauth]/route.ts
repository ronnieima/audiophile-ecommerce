import db from "@/db";
import { users } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import NextAuth, { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) return null;

        const data = await db
          .select()
          .from(users)
          .where(eq(users.username, credentials.username));
        const user = data[0];

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        );

        if (!passwordsMatch) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const userId = token.sub;
      if (!userId) return session;

      const data = await db.query.users.findFirst({
        columns: { username: true },
        where: () => eq(users.id, userId),
      });
      const username = data?.username;
      if (!username) return session;
      return {
        ...session,
        user: { id: userId, username },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
