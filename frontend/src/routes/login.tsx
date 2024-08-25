import { SignIn } from "@/modules/login/sign-in";
import { redirect } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.session) {
      throw redirect({ to: "/app" });
    }
  },
  component: () => <SignIn />,
});
