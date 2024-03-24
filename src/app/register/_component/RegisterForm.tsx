"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(2, "Must contain at least 2 characters")
      .max(20, "Exceeds max of 20 characters"),
    password: z
      .string()
      .min(2, "Must contain at least 2 characters")
      .max(20, "Exceeds max of 20 characters"),
  })
  .required();

export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;

export default function RegisterForm() {
  const form = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: { username: "", password: "" },
  });
  const { control, handleSubmit } = form;
  const router = useRouter();
  async function onSubmit(values: RegisterFormSchemaType) {
    try {
      await registerUser(values);
      toast("Successfully registered.", { type: "success" });
      const res = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      if (!res?.error) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast("Failed to register.", { type: "error" });
    }
  }
  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col items-end gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="flex justify-between">
                <span>Username</span>
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  className=""
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Must be between 2-20 characters.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="flex justify-between">
                <span>Password</span>
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Must be between 2-20 characters.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Register</Button>
      </form>
    </Form>
  );
}
