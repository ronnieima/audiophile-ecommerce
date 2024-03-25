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

const checkoutFormSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Required" }),
    email: z.string().trim().min(1, { message: "Required" }).email(),
    phone: z
      .string()
      .trim()
      .min(1, { message: "Required" })
      .regex(phoneRegex, "Invalid phone number"),
    address: z.string().trim().min(1, { message: "Required" }),
    zipCode: z.string().trim().min(1, { message: "Required" }),
    city: z.string().trim().min(1, { message: "Required" }),
    country: z.string().trim().min(1, { message: "Required" }),
    paymentMethod: z.enum(["eMoney", "cashOnDelivery"]),
    eMoneyNumber: z.string().trim().optional(),
    eMoneyPin: z.string().trim().optional(),
  })
  .refine((input) => {
    if (
      input.paymentMethod === "eMoney" &&
      (input.eMoneyNumber === "" || input.eMoneyPin === "")
    ) {
      return false;
    } else return true;
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
    mode: "all",
    defaultValues: {
      name: "Alexei Ward",
      email: "alexei@mail.com",
      phone: "+1 202-555-0136",
      address: "1137 Williams Avenue",
      zipCode: "10001",
      city: "New York",
      country: "United States",
      paymentMethod: "cashOnDelivery",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });
  const { handleSubmit, control } = form;

  function onSubmit(values: CheckoutFormSchemaType) {}

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-8 p-8 lg:flex-row lg:items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CheckoutSection />
        <SummarySection userId={userId} cart={cart} price={price} />
        {/* <DevTool control={control} /> */}
      </form>
    </Form>
  );
}
