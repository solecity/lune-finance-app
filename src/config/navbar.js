// icons
import {
  Grid,
  DoubleArrows,
  Book,
  Piggy,
  DollarCircle,
  Star,
  Tag,
  User,
  Bag,
  Chart,
  Calculator,
  Message,
  Settings,
  SignOut
} from "shared/icons";

const menuItems = [
  { name: "overview", label: "Overview", icon: Grid, href: "/overview" },
  {
    name: "transactions",
    label: "Transactions",
    icon: DoubleArrows,
    href: "/transactions"
  },
  { name: "accounts", label: "Accounts", icon: Book, href: "/accounts" },
  { name: "budgets", label: "Budgets", icon: Piggy, href: "/budgets" },
  { name: "debts", label: "Debts", icon: DollarCircle, href: "/debts" },
  { name: "goals", label: "Goals", icon: Star, href: "/goals" },
  { name: "categories", label: "Categories", icon: Tag, href: "/categories" },
  {
    name: "recipients",
    label: "Recipients",
    icon: User,
    href: "/recipients"
  },
  {
    name: "shops",
    label: "Shops",
    icon: Bag,
    href: "/shops"
  },
  { name: "analytics", label: "Analytics", icon: Chart, href: "/analytics" },
  {
    name: "calculators",
    label: "Calculators",
    icon: Calculator,
    href: "/calculators"
  }
];

const footerItems = [
  { name: "support", label: "Support", icon: Message, href: "/support" },
  { name: "settings", label: "Settings", icon: Settings, href: "/settings" },
  { name: "sign-out", label: "Sign out", icon: SignOut, href: "/sign-out" }
];

export { menuItems, footerItems };
