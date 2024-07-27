"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import OTP from "@/components/FormControl/otp";
// import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const VerifyAccount = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   })
  // }

  return (
    <Form {...form}>
      <form className="w-full space-y-6">
        <FormProvider {...form}>
          <OTP />
        </FormProvider>
        <Button className="bg-blue-500  hover:bg-blue-600 dark:bg-blue-600 w-full text-white text-xl">
          Verify account
        </Button>
      </form>
    </Form>
  );
};

export default VerifyAccount;
