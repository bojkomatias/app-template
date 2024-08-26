import {
  BanknotesIcon,
  Cog6ToothIcon,
  CogIcon,
  CommandLineIcon,
  CurrencyDollarIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";

export const navItems = [
  { label: "Dashboard", url: "/app", Icon: CommandLineIcon },
  { label: "Expenses", url: "/expenses", Icon: BanknotesIcon },
  { label: "Settings", url: "/settings", Icon: Cog6ToothIcon },
] as const;
