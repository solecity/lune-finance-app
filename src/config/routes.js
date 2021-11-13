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
      }
    ]
  }
];

export { routes };
