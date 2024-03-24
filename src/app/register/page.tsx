"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { registerUser } from "@/lib/actions";
import { Link } from "lucide-react";
import React from "react";
import LoginForm from "../api/auth/signin/_components/LoginForm";
import LogInToDemo from "../api/auth/signin/_components/LogInToDemo";
import RegisterForm from "./_component/RegisterForm";

export default function RegisterPage() {
  async function handleSubmit(formData: FormData) {
    await registerUser(formData);
  }

  return (
    <main className="min-h-screen">
      <MaxWidthContainer className="w-full max-w-lg py-32">
        <Card className="flex w-full flex-col justify-between gap-4 px-4 pb-2 pt-8">
          <CardHeader className="flex flex-col gap-4">
            <CardTitle>Register</CardTitle>
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
            <RegisterForm />
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
