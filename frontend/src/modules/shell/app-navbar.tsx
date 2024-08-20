import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navbar";
import { MagnifyingGlassIcon, InboxIcon } from "@heroicons/react/20/solid";
import { UserDropdown } from "../user/user-dropdown";

export function AppNavbar() {
  return (
    <Navbar>
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
