// external components
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";
import { TransferAlt } from "@styled-icons/boxicons-regular/TransferAlt";
import { Spreadsheet } from "@styled-icons/boxicons-regular/Spreadsheet";
import { Wallet } from "@styled-icons/boxicons-regular/Wallet";
import { DollarCircle } from "@styled-icons/boxicons-regular/DollarCircle";
import { Star } from "@styled-icons/boxicons-regular/Star";
import { Tag } from "@styled-icons/boxicons-regular/Tag";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { BarChart } from "@styled-icons/boxicons-regular/BarChart";
import { Calculator } from "@styled-icons/boxicons-regular/Calculator";
import { Cog } from "@styled-icons/boxicons-regular/Cog";
import { LogOutCircle } from "@styled-icons/boxicons-regular/LogOutCircle";

const menuItems = [
  { name: "overview", label: "Overview", icon: Dashboard, href: "/overview" },
  {
    name: "transactions",
    label: "Transactions",
    icon: TransferAlt,
    href: "/transactions"
  },
  { name: "accounts", label: "Accounts", icon: Spreadsheet, href: "/accounts" },
  { name: "budgets", label: "Budgets", icon: Wallet, href: "/budgets" },
  { name: "debts", label: "Debts", icon: DollarCircle, href: "/debts" },
  { name: "goals", label: "Goals", icon: Star, href: "/goals" },
  { name: "categories", label: "Categories", icon: Tag, href: "/categories" },
  {
    name: "recipients",
    label: "Recipients",
    icon: UserCircle,
    href: "/recipients"
  },
  { name: "analytics", label: "Analytics", icon: BarChart, href: "/analytics" },
  {
    name: "calculators",
    label: "Calculators",
    icon: Calculator,
    href: "/calculators"
  }
];

const footerItems = [
  { name: "settings", label: "Settings", icon: Cog, href: "/settings" },
  { name: "logout", label: "Logout", icon: LogOutCircle, href: "/logout" }
];

export { menuItems, footerItems };
