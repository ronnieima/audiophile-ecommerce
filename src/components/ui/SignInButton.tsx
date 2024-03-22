"use client";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { signIn } from "next-auth/react";

type Props = {
  className?: string;
};
export default function SignInButton({ className }: Props) {
  return (
    <Button className={cn(className)} onClick={() => signIn()}>
      Sign in
    </Button>
  );
}
