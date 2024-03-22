"use client";
import React from "react";
import { DialogTrigger } from "./dialog";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  return (
    <DialogTrigger>
      <ShoppingCart />
    </DialogTrigger>
  );
}
