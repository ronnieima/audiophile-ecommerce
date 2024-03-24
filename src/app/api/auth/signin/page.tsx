import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import LogInToDemo from "./_components/LogInToDemo";
export default async function SignInPage() {
  return (
    <main className="min-h-screen">
      <MaxWidthContainer className="w-full max-w-lg py-32">
        <Card className="flex w-full flex-col justify-between gap-4 px-4 pb-2 pt-8">
          <CardHeader className="flex flex-col gap-4">
            <CardTitle>Sign in</CardTitle>
            <div>
              <LogInToDemo />
              <p>
                Username: <span className="font-bold">demo</span>
              </p>
              <p>
                Password: <span className="font-bold">123</span>
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col gap-16">
            <div className="flex gap-2">
              <p>Are you new?</p>
              <Link href={"/register"} className="text-primary underline">
                Create an account
              </Link>
            </div>
          </CardFooter>
        </Card>
      </MaxWidthContainer>
    </main>
  );
}
