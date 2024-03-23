"use client";
import { signIn } from "next-auth/react";
import React from "react";
import CredentialsSignIn from "./CredentialsSignIn";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

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
    console.log(response);
    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
  }
  return (
    <form
      className="flex flex-col items-end gap-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </div>
      <CredentialsSignIn />
    </form>
  );
}
