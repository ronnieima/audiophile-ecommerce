"use client";
import { useState } from "react";
import { Button } from "./button";

export default function Counter() {
  const [count, setCount] = useState(1);
  const handleDecrement = () => {
    if (count !== 0) setCount((prevCount) => prevCount - 1);
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex h-10 items-center">
      <Button className="w-10 bg-gray text-black" onClick={handleDecrement}>
        -
      </Button>
      <h6 className="inline-flex h-full w-10 items-center justify-center bg-gray">
        {count}
      </h6>
      <Button className="w-10 bg-gray text-black" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}
