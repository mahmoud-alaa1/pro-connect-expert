"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { googleAuth } from "@/services/client/login";

export default function GoogleAuthButton() {
  return (
    <Button
      variant="outline"
      className="flex w-full items-center gap-2 cursor-pointer"
      onClick={googleAuth}
    >
      <span>سجل مع جوجل</span>
      <Image src="/google.svg" alt="Google" width={20} height={20} />
    </Button>
  );
}
