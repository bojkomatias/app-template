import { Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/app")({
  component: () => <Text>Hi</Text>,
});
