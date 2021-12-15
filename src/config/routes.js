// base
import { lazy } from "react";

// layouts
import Main from "shared/layouts/main";

// layouts

const routes = [
  {
    exact: true,
    path: "/signin",
    component: lazy(() => import("views/auth/signIn/signIn"))
  },
  {
    exact: true,
    path: "/signup",
    component: lazy(() => import("views/auth/signUp/signUp"))
  },
  {
    layout: Main,
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("views/overview/overview"))
      },
      {
        exact: true,
        path: "/overview",
        component: lazy(() => import("views/overview/overview"))
      },
      {
        exact: true,
        path: "/transactions",
        component: lazy(() => import("views/transactions/transactions"))
      },
      {
        exact: true,
        path: "/accounts",
        component: lazy(() => import("views/accounts/accounts"))
      },
      {
        exact: true,
        path: "/budgets",
        component: lazy(() => import("views/commingSoon"))
      },
      {
        exact: true,
        path: "/debts",
        component: lazy(() => import("views/debts/debts"))
      },
      {
        exact: true,
        path: "/goals",
        component: lazy(() => import("views/goals/goals"))
      },
      {
        exact: true,
        path: "/categories",
        component: lazy(() => import("views/categories/categories"))
      },
      {
        exact: true,
        path: "/recipients",
        component: lazy(() => import("views/recipients/recipients"))
      },
      {
        exact: true,
        path: "/analytics",
        component: lazy(() => import("views/commingSoon"))
      },
      {
        exact: true,
        path: "/calculators",
        component: lazy(() => import("views/commingSoon"))
      },
      {
        exact: true,
        path: "/settings",
        component: lazy(() => import("views/settings/settings"))
      },
      {
        exact: true,
        path: "/logout",
        component: lazy(() => import("views/logout/logout"))
      }
    ]
  }
];

export { routes };
