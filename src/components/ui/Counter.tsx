"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./button";

type Props = {
  quantity?: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

export default function Counter({ quantity, setQuantity }: Props) {
  const handleDecrement = () => {
    if (quantity !== 0) setQuantity((prevCount) => prevCount - 1);
  };
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex h-10 items-center">
      <Button className="w-10 bg-gray text-black" onClick={handleDecrement}>
        -
      </Button>
      <h6 className="inline-flex h-full w-10 items-center justify-center bg-gray">
        {quantity}
      </h6>
      <Button className="w-10 bg-gray text-black" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}
