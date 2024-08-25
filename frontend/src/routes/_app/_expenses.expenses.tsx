import { Text } from "@/components/text";
import { ExpensesTable } from "@/modules/expenses/expenses-table";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_expenses/expenses")({
  component: () => <ExpensesTable />,
});
