"use client";

import React from "react";
import InputFormControl from "@/components/FormControl/Input";
import { Form } from "@/components/ui/form";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
const NewPasswordForm = () => {
  const form = useForm();
  return (
    <Form {...form}>
      <form className="space-y-5">
        <FormProvider {...form}>
          <InputFormControl label="New Password" name="new_password" />
          <InputFormControl label="Confirm Password" name="confirm_password" />
        </FormProvider>
        <Button className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 w-full text-white text-xl">
          Reset Password
        </Button>
      </form>
    </Form>
  );
};

export default NewPasswordForm;
