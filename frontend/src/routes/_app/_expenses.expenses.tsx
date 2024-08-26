import { ExpenseDetail } from "@/modules/expenses/expense-detail";
import { ExpensesTable } from "@/modules/expenses/expenses-table";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_expenses/expenses")({
  component: () => <ExpenseDetail />,
});
