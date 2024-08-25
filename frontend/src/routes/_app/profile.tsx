import { UserDetails } from "@/modules/user/user-details";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/profile")({
  component: () => <UserDetails />,
});
