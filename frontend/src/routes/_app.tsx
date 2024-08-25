import { Button } from "@/components/button";
import { StackedLayout } from "@/components/stacked-layout";
import { AppNavbar } from "@/modules/shell/app-navbar";
import { AppSidebar } from "@/modules/shell/app-sidebar";
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
    <StackedLayout sidebar={<AppSidebar />} navbar={<AppNavbar />}>
      <Outlet />
    </StackedLayout>
  );
}
