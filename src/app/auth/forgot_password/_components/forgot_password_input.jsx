"use client";

import React from "react";
import InputFormControl from "@/components/FormControl/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
const ForgotPasswordInput = () => {
  const form = useForm();
  return (
    <Form {...form}>
      <form className="w-full space-y-4">
        <FormProvider {...form}>
          <InputFormControl label="Email" name="email" />
        </FormProvider>
        <Button className="bg-blue-500 hover:bg-blue-700  w-full text-white text-xl">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordInput;
