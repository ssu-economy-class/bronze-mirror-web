import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import { GetUserMeResp } from "@/api/get/useGetUserMe";
import { useState, useRef } from "react";
import { useLogout } from "@/hooks/useLogout";

export function UserDropdown({ userInfo }: { userInfo: GetUserMeResp }) {
  const handleLogout = useLogout();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <DropdownMenuTrigger asChild>
          <div className="group flex flex-row items-center gap-2 cursor-pointer select-none">
            <Avatar>
              <AvatarImage src={userInfo.profileImage} alt="@avatar" />
            </Avatar>
            <p className="text-white text-sm font-semibold">
              {userInfo.nickname}
            </p>
            <ChevronDown className="text-white stroke-2.5 size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-32"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
            로그아웃
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
