import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/sidebar";
import { ExpensesTable } from "@/modules/expenses/expenses-table";
import {
  DocumentPlusIcon,
  HomeIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_expenses")({
  component: () => (
    <>
      <div className="mb-2 flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-2 dark:border-white/10">
        <Heading>Expenses</Heading>
        <div className="flex gap-4">
          <Button>
            <DocumentPlusIcon />
            Expense
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ExpensesTable />
        <Outlet />
      </div>
    </>
  ),
});
