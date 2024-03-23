import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = { label: string; name: string };

export default function RadioButton({ label, name }: Props) {
  return (
    <div className="group flex items-center justify-start  gap-4 rounded-lg border-2 border-gray px-4 hover:cursor-pointer ">
      <Input
        type="radio"
        name={name}
        className="w-6 border-2 border-gray group-checked:border-primary"
      />
      <Label className="font-semibold">{label}</Label>
    </div>
  );
}
