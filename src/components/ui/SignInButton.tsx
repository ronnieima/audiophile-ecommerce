"use client";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { signIn } from "next-auth/react";

type Props = {
  className?: string;
};
export default function SignInButton({ className }: Props) {
  return (
    <Button
      className={cn("group relative", className)}
      variant={"ghost"}
      onClick={() => signIn()}
    >
      Sign in
      <span className="absolute top-8 text-xs text-green-300 group-hover:hidden">
        *Demo account available*
      </span>
    </Button>
  );
}
