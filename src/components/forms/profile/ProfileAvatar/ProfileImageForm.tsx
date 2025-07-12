"use client";
import { useRef } from "react";
import { useChangeAvatar } from "@/hooks/profile/useChangeAvatar";
import { ProfileImageUploader } from "./ProfileImageUploader";
import { useAuth } from "@/store/useAuthStore";
import { Progress } from "@/components/ui/progress";

export function ProfileImageForm() {
  const user = useAuth((s) => s.user!);

  const avatarUrl = user?.avatar_url || "/default-user.webp";

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

      {changeAvatar.isPending && (
        <div className="my-4 space-y-2">
          <Progress value={undefined} className="w-full" />
        </div>
      )}

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
