import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { Session } from "lucia";

type Context = {
  queryClient: QueryClient;
  session: (Omit<Session, "expiresAt"> & { expiresAt: string }) | null;
};

export const Route = createRootRouteWithContext<Context>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
