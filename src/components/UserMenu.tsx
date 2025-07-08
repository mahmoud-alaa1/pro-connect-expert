import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/store/useAuthStore";
import { Button } from "./ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Avatar, AvatarImage } from "./ui/avatar";
import { LayoutDashboard, Settings, User } from "lucide-react";
import LogoutButton from "./LogoutButton";
import { useGetProfile } from "@/hooks/profile/useGetProfile";

export default function UserMenu() {
  const user = useAuth((s) => s.user);
  const t = useTranslations("Common");
  const { data: profile } = useGetProfile();
  if (!user) {
    return (
      <Button variant="outline">
        <Link href="/login">{t("login")}</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          <AvatarImage src={user.avatar_url || "/default-user.png"} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.full_name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>{t("profile")}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/expert-dashboard"
            className="flex items-center cursor-pointer">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>{t("dashboard")}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>{t("settings")}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
