import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VerifyAccount from "./Verify_account";
const LoginPage = () => {
  return (
    <Card className="w-[90%] md:w-[50%] lg:w-[40%]">
      <CardHeader>
        <CardTitle className="m-auto text-2xl md:text-3xl lg:text-4xl text-blue-500 dark:text-blue-600">
          Verify Email
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <VerifyAccount />
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
