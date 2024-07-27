import React from "react";
import { useFormContext } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const OTP = () => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name="pin"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xl">One-Time Password</FormLabel>
          <FormControl>
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup className="w-full m-auto">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default OTP;
