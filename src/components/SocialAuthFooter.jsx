import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
const SocialAuthFooter = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Separator className="w-[45%] bg-blue-500" />
        <p>OR</p>
        <Separator className="w-[45%] bg-blue-500" />
      </div>
      <Button variant={"outline"} className="w-full h-[45px] bg-white">
        <Image
          src={"/google-icon.png"}
          width={35}
          height={35}
          alt="google"
          className="rounded-full shadow-xl"
        />
      </Button>
    </>
  );
};

export default SocialAuthFooter;
