import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { checkout } from "@/config/content";
import React from "react";
import FormInput from "./FormInput";
import { useFormContext, useWatch } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export default function CheckoutSection() {
  const { control } = useFormContext();
  const paymentMethod = useWatch({
    control,
    name: "paymentMethod",
  });
  return (
    <section className="w-full rounded-lg bg-white ">
      <MaxWidthContainer>
        <h2 className="w-full py-8 text-left text-3xl">Checkout</h2>
        <div className="w-full space-y-8 py-4">
          {checkout.map((section) => (
            <div key={section.header} className="flex w-full flex-col gap-4">
              <h3 className="text-subtitle px-2 text-primary">
                {section.header}
              </h3>
              <div className=" flex flex-wrap justify-between">
                {section.inputs.map((input) => (
                  <FormInput
                    control={control}
                    key={input.value}
                    inputType={input.inputType}
                    label={input.label}
                    value={input.value}
                    placeholder={input.placeholder}
                    className={input.className}
                  />
                ))}
              </div>
            </div>
          ))}
          <div
            key={"Payment Details"}
            className="flex w-full flex-col gap-4 px-2"
          >
            <h3 className="text-subtitle  text-primary">Payment Details</h3>
            <div className=" flex flex-wrap justify-between gap-4">
              <FormField
                control={control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between">
                    <FormLabel className="font-semibold">
                      Payment Method
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={"eMoney"}
                        className="sm:w-1/2"
                      >
                        <FormItem className="flex h-12 items-center gap-2 space-y-0 rounded-lg border-2 border-gray px-4 [&:has([data-state=checked])]:border-primary">
                          <FormControl className="relative">
                            <RadioGroupItem
                              className="peer z-20"
                              value="eMoney"
                            />
                          </FormControl>
                          <FormLabel className="font-semibold">
                            e-Money
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex  h-12 items-center gap-2 space-y-0 rounded-lg border-2 border-gray px-4 [&:has([data-state=checked])]:border-primary">
                          <FormControl>
                            <RadioGroupItem
                              className="peer "
                              value="cashOnDelivery"
                            />
                          </FormControl>
                          <FormLabel className=" font-semibold">
                            Cash on Delivery
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {paymentMethod === "eMoney" && (
              <div className="flex w-full flex-col items-stretch lg:flex-row">
                <FormInput
                  control={control}
                  inputType="number"
                  label="e-Money Number"
                  value="eMoneyNumber"
                  key="eMoneyNumber"
                  placeholder="238521993"
                />
                <FormInput
                  control={control}
                  inputType="number"
                  label="e-Money PIN"
                  value="eMoneyPin"
                  key="eMoneyPin"
                  placeholder="6891"
                />
              </div>
            )}
            {paymentMethod === "cashOnDelivery" && (
              <div className="flex items-center gap-8 py-2">
                <div className="relative aspect-square h-16">
                  <Image
                    src={"/assets/checkout/icon-cash-on-delivery.svg"}
                    fill
                    alt="Cash on delivery"
                  />
                </div>
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
