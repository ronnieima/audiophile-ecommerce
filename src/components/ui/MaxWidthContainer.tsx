import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type MaxWidthContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function MaxWidthContainer({
  children,
  className,
}: MaxWidthContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
