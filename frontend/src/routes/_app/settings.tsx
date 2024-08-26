import { SidebarLayout } from "@/components/sidebar-layout";
import { SettingsSidebar } from "@/modules/settings/settings-sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const context = import.meta.webpackContext("./settings/", {
  recursive: true,
});

console.log("sape", context);

export const Route = createFileRoute("/_app/settings")({
  component: () => (
    <div className="flex">
      <SettingsSidebar />
      <Outlet />
    </div>
  ),
});
