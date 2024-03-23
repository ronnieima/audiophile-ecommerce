import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getProviders, signIn } from "next-auth/react";
import CredentialsSignIn from "./_components/CredentialsSignIn";
import LoginForm from "./_components/LoginForm";
export default async function SignInPage() {
  const providers = await getProviders();

  return (
    <main>
      <MaxWidthContainer className="py-32">
        <Card>
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </MaxWidthContainer>
    </main>
  );
}
