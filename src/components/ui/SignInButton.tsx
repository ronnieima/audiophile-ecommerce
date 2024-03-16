"use client";
import { Button } from "./button";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
