"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
  }
  return (
    <form
      className="flex w-full flex-col items-end gap-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="w-full">
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />
        <Button variant={"link"} asChild>
          <Link href={"#"} className="m-0 h-auto w-auto self-end p-0 underline">
            Forgot password?
          </Link>
        </Button>
      </div>
      <Button type="submit">Sign in</Button>
    </form>
  );
}
