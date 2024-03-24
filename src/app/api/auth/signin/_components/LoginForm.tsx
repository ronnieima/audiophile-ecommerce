"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const loginFormSchema = z
  .object({
    username: z.string().min(1, "Required"),
    password: z.string().min(1, "Required"),
  })
  .required();

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { username: "", password: "" },
  });
  const { control, handleSubmit } = form;
  const router = useRouter();
  async function onSubmit(values: LoginFormSchemaType) {
    try {
      const res = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      console.log(res);
      if (!res?.error) {
        router.push("/");
        router.refresh();
      } else throw res.error;
    } catch (error) {
      toast(`Failed to login`, { type: "error" });

      throw error;
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
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
