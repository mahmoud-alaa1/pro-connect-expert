"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/useAuthStore";
import { LogOut } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

export default function LogoutButton() {
  const logout = useAuth((s) => s.logout);
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    queryClient.removeQueries({ queryKey: ["profile"] });
    logout();
  };

  return (
    <Button variant="link" className="cursor-pointer" onClick={handleLogout}>
      <LogOut />
    </Button>
  );
}
