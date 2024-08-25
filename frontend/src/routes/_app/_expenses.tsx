import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_expenses")({
  component: () => (
    <div className="m-2 border">
      <Outlet />
    </div>
  ),
});
