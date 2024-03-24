"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";
import { Control, FieldValues } from "react-hook-form";

export type FormInputProps = {
  control: Control<FieldValues, any>;
  label: string;
  value: string;
  inputType: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  className?: string;
};

export default function FormInput({
  control,
  label,
  value,
  inputType,
  placeholder,
  className,
}: FormInputProps) {
  return (
    <FormField
      control={control}
      name={value}
      render={({ field }) => (
        <FormItem className={cn(className, "w-full space-y-2 p-2")}>
          <FormLabel className="flex items-center justify-between">
            <>
              <p className="font-semibold">{label}</p>
              <FormMessage />
            </>
          </FormLabel>
          <FormControl>
            <Input
              type={inputType}
              id={value}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
