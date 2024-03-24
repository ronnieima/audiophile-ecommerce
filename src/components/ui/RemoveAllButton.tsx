"use client";
import { deleteAllCartItems } from "@/lib/actions";
import React from "react";
import { Button } from "./button";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function RemoveAllButton() {
  const session = useSession();
  const userId = session.data?.user.id;
  return (
    <Button
      onClick={() => {
        if (!userId) return toast("No user ID found.", { type: "error" });
        deleteAllCartItems(userId);
      }}
      variant={"link"}
      className="mx-0 h-auto w-auto px-0"
    >
      Remove all
    </Button>
  );
}
