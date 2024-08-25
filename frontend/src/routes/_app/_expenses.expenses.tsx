import { Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_expenses/expenses")({
  component: () => <Text>Hello /_app/_expenses/expenses!</Text>,
});
