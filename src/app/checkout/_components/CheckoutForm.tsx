"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { checkout } from "@/config/content";
import { DevTool } from "@hookform/devtools";
import { useForm, useWatch } from "react-hook-form";
import FormInput from "./FormInput";

export default function CheckoutForm() {
  const form = useForm();
  const paymentMethod = useWatch({
    control: form.control,
    name: "paymentMethod",
  });
  return (
    <Form {...form}>
      <form>
        <h2>Checkout</h2>
        <div className="w-full space-y-8 py-8">
          {checkout.map((section) => (
            <div key={section.header} className="flex w-full flex-col gap-4">
              <h3 className="text-subtitle px-2 text-primary">
                {section.header}
              </h3>
              <div className=" flex flex-wrap justify-between">
                {section.inputs.map((input) => (
                  <FormInput
                    control={form.control}
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
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-4">
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormItem className="flex h-12 items-center gap-2 space-y-0 rounded-lg border-2 border-gray px-4 [&:has([data-state=checked])]:border-primary">
                          <FormControl className="relative">
                            <RadioGroupItem
                              defaultChecked={true}
                              className="peer z-20"
                              value="eMoney"
                            />
                          </FormControl>
                          <FormLabel className="font-semibold">
                            e-Money
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex h-12 items-center gap-2 space-y-0 rounded-lg border-2 border-gray px-4 [&:has([data-state=checked])]:border-primary">
                          <FormControl>
                            <RadioGroupItem
                              className="peer "
                              value="cashOnDelivery"
                            />
                          </FormControl>
                          <FormLabel className="font-semibold">
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
              <>
                <FormInput
                  control={form.control}
                  inputType="number"
                  label="e-Money Number"
                  value="eMoneyNumber"
                  key="eMoneyNumber"
                  placeholder="238521993"
                />
                <FormInput
                  control={form.control}
                  inputType="number"
                  label="e-Money PIN"
                  value="eMoneyPin"
                  key="eMoneyPin"
                  placeholder="6891"
                />
              </>
            )}
          </div>
        </div>
      </form>
      {/* <DevTool control={form.control} /> */}
    </Form>
  );
}
