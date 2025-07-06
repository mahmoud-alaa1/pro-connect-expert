"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/useAuthStore";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const logout = useAuth((s) => s.logout);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    logout();
  };

  return (
    <Button variant="link" className="cursor-pointer" onClick={handleLogout}>
      <LogOut />
    </Button>
  );
}
