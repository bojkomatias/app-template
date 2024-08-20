import { SidebarLayout } from "@/components/sidebar-layout";
import { sessionQueryOptions } from "@/lib/query/session";
import { api } from "@/lib/rpc-client";
import { AppNavbar } from "@/modules/shell/app-navbar";
import { AppSidebar } from "@/modules/shell/app-sidebar";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  beforeLoad: ({ context }) => {
    if (!context?.session) {
      throw redirect({ to: "/" });
    }
  },
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <SidebarLayout sidebar={<AppSidebar />} navbar={<AppNavbar />}>
      <a href={"/api/logout"}>Logout</a>
      <Link to="/">Go to landing</Link>
      <Outlet />
    </SidebarLayout>
  );
}
