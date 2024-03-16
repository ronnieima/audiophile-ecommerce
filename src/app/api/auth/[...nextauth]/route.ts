import db from "@/db";
import { users } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  adapter: DrizzleAdapter(db) as Adapter,
  callbacks: {
    async session({ session, user, token }) {
      console.log({ session, user, token });
      return session;
    },
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
});

export { handler as GET, handler as POST };
