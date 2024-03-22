"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { ShoppingCart } from "lucide-react";
import { getProducts } from "@/lib/actions";
import { Product } from "@/data";
import Image from "next/image";
import Counter from "./Counter";
import { Button } from "./button";

export default function Cart() {
  const [headphones, setHeadphones] = useState<Product[]>();
  useEffect(() => {
    async function getHeadphones() {
      const headphones = await getProducts("headphones");
      setHeadphones(headphones);
    }
    getHeadphones();
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <ShoppingCart />
      </DialogTrigger>
      <DialogContent className="overflow-auto">
        <DialogHeader className="flex-row items-center justify-between">
          <DialogTitle className=" uppercase">Cart</DialogTitle>
          <Button variant={"link"} className="mx-0 h-auto w-auto px-0">
            Remove all
          </Button>
        </DialogHeader>
        {headphones?.map((headphone) => {
          return (
            <div key={headphone.name} className="flex justify-between ">
              <div className="flex gap-4">
                <div className="relative aspect-square h-16 w-16">
                  <Image
                    fill
                    className="absolute  h-full w-full"
                    src={headphone.image.mobile.slice(1)}
                    alt={headphone.name}
                  />
                </div>
                <div className="flex flex-col items-start text-xs">
                  <p className=" text-left font-bold">
                    {headphone.name.replace("Headphones", "")}
                  </p>
                  <p>${headphone.price}</p>
                </div>
              </div>
              <Counter />
            </div>
          );
        })}
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-bold">$ 5,3232</p>
        </div>
        <DialogClose>
          <Button className="w-full uppercase">Checkout</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
