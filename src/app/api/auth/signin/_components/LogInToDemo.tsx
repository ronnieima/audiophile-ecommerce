"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogInToDemo() {
  const router = useRouter();
  return (
    <Button
      className="mx-0 h-auto w-auto px-0 text-lg underline"
      variant={"link"}
      onClick={async (e) => {
        e.preventDefault();
        const response = await signIn("credentials", {
          username: "demo",
          password: "123",
          redirect: false,
        });
        if (!response?.error) {
          router.push("/");
          router.refresh();
        }
      }}
    >
      Click here to log in to the demo account
    </Button>
  );
}
