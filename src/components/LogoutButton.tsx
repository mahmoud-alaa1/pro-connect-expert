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
    logout(); 
    router.push("/login");
  };

  return (
    <Button variant="outline" className="cursor-pointer" onClick={handleLogout}>
      <LogOut />
    </Button>
  );
}
