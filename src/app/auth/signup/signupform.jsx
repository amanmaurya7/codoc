"use client";

import React from "react";
import InputFormControl from "@/components/FormControl/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import SocialAuthFooter from "@/components/SocialAuthFooter";
import Link from "next/link";
import { signupSchema } from "@/lib/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
// import { signupAction } from "./action";
const SignupForm = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  //   const onSubmit = async (values) => {
  //     await signupAction(values);
  //   };
  return (
    <Form {...form}>
      <form className="w-full space-y-4">
        <FormProvider {...form}>
          <InputFormControl label="Email" name="email" />
          <InputFormControl label="Username" name="username" />
          <InputFormControl label="Password" name="password" />
          <div className="flex justify-end">
            <Link
              href={"/auth/login"}
              className="w-full text-sm hover:text-blue-500 hover:underline underline-offset-2 text-right"
            >
              {"Login to account"}
            </Link>
          </div>

          <Button className="bg-blue-500  hover:bg-blue-600 dark:bg-blue-600 w-full text-white text-xl">
            Signup
          </Button>
          <SocialAuthFooter />
        </FormProvider>
      </form>
    </Form>
  );
};

export default SignupForm;
