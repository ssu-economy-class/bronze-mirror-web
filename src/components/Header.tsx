import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { GetUserMeResp } from "@/api/get/useGetUserMe";
import { UserDropdown } from "@/components/UserDropDown";

interface HeaderProps {
  userInfo?: GetUserMeResp;
}
export function Header({ userInfo }: HeaderProps) {
  return (
    <NavigationMenu
      className={cn(
        "flex items-center justify-end bg-black max-h-16 min-w-screen sticky top-0 z-50"
      )}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          {userInfo && <UserDropdown userInfo={userInfo} />}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/immerse">Immerse</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/user">User</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
