"use client";

import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  imageUrl: string;
  onChangeClick: () => void;
};

export function ProfileImageUploader({ imageUrl, onChangeClick }: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <div className="relative w-20 h-20">
            <Image
              src={imageUrl || "/default-avatar.png"}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
              fill
              sizes="(max-width: 20rem) 100vw, 20rem"
              priority
            />
          </div>
          <Button
            type="button"
            size="icon"
            className="absolute bottom-0 right-0 w-6 h-6 p-0 rounded-full"
            onClick={onChangeClick}>
            <Camera className="h-3 w-3" />
          </Button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">Profile Photo</h3>
          <p className="text-sm text-gray-500">Update your profile picture</p>
          <Button
            type="button"
            variant="link"
            className="mt-2 text-sm p-0 h-auto text-primary-600"
            onClick={onChangeClick}>
            Change Photo
          </Button>
        </div>
      </div>
    </div>
  );
}
