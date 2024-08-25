import { Avatar } from "@/components/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/dropdown";
import { NavbarItem } from "@/components/navbar";
import {
  UserIcon,
  Cog8ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/16/solid";
import { useSuspenseQuery } from "@tanstack/react-query";
import { currentUserQueryOptions } from "./queries";

export function UserDropdown() {
  const { data } = useSuspenseQuery(currentUserQueryOptions);

  return (
    <Dropdown>
      <DropdownButton as={NavbarItem}>
        <Avatar src={data.avatar_url} square />
      </DropdownButton>
      <DropdownMenu className="min-w-64" anchor="bottom end">
        <DropdownHeader>
          <div className="pr-6">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Signed in as {data.name}
            </div>
            <div className="text-sm/6 font-medium text-zinc-700 dark:text-zinc-200">
              {data.email}
            </div>
          </div>
        </DropdownHeader>
        <DropdownDivider />
        <DropdownItem to="/profile">
          <UserIcon />
          <DropdownLabel>My profile</DropdownLabel>
        </DropdownItem>
        <DropdownItem to="/settings">
          <Cog8ToothIcon />
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/api/logout">
          <ArrowRightStartOnRectangleIcon />
          <DropdownLabel>Sign out</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
