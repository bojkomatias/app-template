import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navbar";
import { MagnifyingGlassIcon, InboxIcon } from "@heroicons/react/16/solid";
import { navItems } from "./navigation";
import { UserDropdown } from "../user/user-dropdown";
import { useLocation, useMatch } from "@tanstack/react-router";

export function AppNavbar() {
  const pathname = useLocation({ select: (location) => location.pathname });

  return (
    <Navbar>
      <img src="/bun.svg" className="size-8" />
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url, Icon }) => (
          <NavbarItem key={label} to={url} current={pathname.includes(url)}>
            <Icon data-slot="icon" />
            <NavbarLabel>{label}</NavbarLabel>
          </NavbarItem>
        ))}
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem to="/search" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>
        <NavbarItem to="/inbox" aria-label="Inbox">
          <InboxIcon />
        </NavbarItem>
        <UserDropdown />
      </NavbarSection>
    </Navbar>
  );
}
