"use client";
import { Form } from "@/components/ui/form";
import { Product } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CheckoutSection from "./CheckoutSection";
import SummarySection from "./SummarySection";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const checkoutFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  phone: z.string().min(1).regex(phoneRegex, "Invalid phone number"),
  address: z.string().min(1),
  zipCode: z.number(),
  city: z.string().min(1),
  country: z.string().min(1),
  paymentMethod: z.enum(["eMoney", "cashOnDelivery"]),
});

export type CheckoutFormSchemaType = z.infer<typeof checkoutFormSchema>;

export type Cart = {
  product: Product | undefined;
  quantity: number;
}[];

export type Props = { userId: string; cart: Cart; price: number };

export default function CheckoutForm({ cart, price, userId }: Props) {
  const form = useForm<CheckoutFormSchemaType>({
    resolver: zodResolver(checkoutFormSchema),
  });
  const { control, handleSubmit } = form;

  function onSubmit(values: CheckoutFormSchemaType) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-8 p-8 lg:flex-row lg:items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CheckoutSection />
        <SummarySection userId={userId} cart={cart} price={price} />
      </form>
      {/* <DevTool control={form.control} /> */}
    </Form>
  );
}
