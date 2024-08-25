import { Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/settings")({
  component: () => <Text>Hello /_app/settings!</Text>,
});
