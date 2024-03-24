"use client";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Categories from "../Home/Categories";
import { createPortal } from "react-dom";

type MobileMenuProps = {
  className?: string;
};

export default function MobileMenu({ className }: MobileMenuProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal((prev) => !prev)}
        className={cn(className)}
      >
        <Menu size={32} />
        <span className="sr-only">Mobile menu</span>
      </button>

      <div
        className={cn("inset-0 z-50 translate-y-full transition-transform", {
          "absolute ": showModal,
          hidden: !showModal,
        })}
      >
        <div className="rounded-b-lg bg-white py-16 text-black">
          <Categories setShowModal={setShowModal} />
        </div>
      </div>
      {showModal &&
        createPortal(
          <div
            className="absolute bottom-0 left-0 right-0 top-0 w-full bg-black/50 "
            onClick={() => setShowModal(false)}
          ></div>,
          document.body,
        )}
    </>
  );
}
