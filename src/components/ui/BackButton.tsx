"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type Props = { className?: string };

export default function BackButton({ className }: Props) {
  const router = useRouter();
  return (
    <Button onClick={router.back} variant={"link"} className={cn(className)}>
      Go back
    </Button>
  );
}
