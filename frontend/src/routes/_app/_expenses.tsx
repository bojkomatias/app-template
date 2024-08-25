import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/sidebar";
import { HomeIcon, PlusIcon } from "@heroicons/react/16/solid";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_expenses")({
  component: () => (
    <div className="flex">
      <Sidebar>
        <SidebarBody>
          <SidebarSection>
            <SidebarItem to="/expenses">
              <HomeIcon />
              <SidebarLabel>Overview</SidebarLabel>
            </SidebarItem>
            <SidebarItem to="/expenses/new">
              <PlusIcon />
              <SidebarLabel>New expense</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        </SidebarBody>
      </Sidebar>
      <Outlet />
    </div>
  ),
});
