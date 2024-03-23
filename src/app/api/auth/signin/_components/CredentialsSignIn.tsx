"use client";
import { Button } from "@/components/ui/button";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { FormEvent, MouseEvent, useEffect, useState } from "react";

export default function CredentialsSignIn() {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  return <Button type="submit">Sign in with </Button>;
}
