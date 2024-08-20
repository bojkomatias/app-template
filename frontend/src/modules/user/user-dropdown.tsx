import { Avatar } from "@/components/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/dropdown";
import { NavbarItem } from "@/components/navbar";
import { SidebarItem } from "@/components/sidebar";
import {
  UserIcon,
  Cog8ToothIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";

export function UserDropdown() {
  return (
    <Dropdown>
      <DropdownButton as={SidebarItem}>
        <Avatar src="/profile-photo.jpg" square className="lg:hidden" />
        <span className="flex min-w-0 items-center gap-3 max-lg:hidden">
          <Avatar src="/profile-photo.jpg" className="size-10" square alt="" />
          <span className="min-w-0">
            <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
              Erica
            </span>
            <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
              erica@example.com
            </span>
          </span>
        </span>
        <ChevronUpIcon className="max-lg:hidden" />
      </DropdownButton>

      <DropdownMenu className="min-w-64" anchor="bottom end">
        <DropdownItem to="/my-profile">
          <UserIcon />
          <DropdownLabel>My profile</DropdownLabel>
        </DropdownItem>
        <DropdownItem to="/settings">
          <Cog8ToothIcon />
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem to="/privacy-policy">
          <ShieldCheckIcon />
          <DropdownLabel>Privacy policy</DropdownLabel>
        </DropdownItem>
        <DropdownItem to="/share-feedback">
          <LightBulbIcon />
          <DropdownLabel>Share feedback</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem to="/logout">
          <ArrowRightStartOnRectangleIcon />
          <DropdownLabel>Sign out</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
