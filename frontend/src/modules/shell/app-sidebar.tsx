import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/components/sidebar";
import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Heading } from "@/components/heading";
import { navItems } from "./navigation";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Heading className="text-center">App Template</Heading>
        <SidebarSpacer />
        <SidebarSection className="max-lg:hidden">
          <SidebarItem to="/search">
            <MagnifyingGlassIcon />
            <SidebarLabel>Search</SidebarLabel>
          </SidebarItem>
          <SidebarItem to="/inbox">
            <InboxIcon />
            <SidebarLabel>Inbox</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <SidebarItem key={label} href={url}>
              {label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}
