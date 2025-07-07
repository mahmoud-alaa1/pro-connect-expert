"use client";
import { useRef } from "react";
import { useChangeAvatar } from "@/hooks/profile/useChangeAvatar";
import { ProfileImageUploader } from "./ProfileImageUploader";
import { useAuth } from "@/store/useAuthStore";

export function ProfileImageForm() {
  const user = useAuth((s) => s.user!);

  const avatarUrl = user?.avatar_url || "/default-user.png";

  const inputRef = useRef<HTMLInputElement>(null);
  const changeAvatar = useChangeAvatar();
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    changeAvatar.mutate({ file, userId: user.id });
  };

  return (
    <>
      <ProfileImageUploader
        imageUrl={avatarUrl}
        onChangeClick={() => inputRef.current?.click()}
      />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={onFileChange}
      />
    </>
  );
}
