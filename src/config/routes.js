// base
import { lazy } from "react";

// layouts
import Main from "shared/layouts/main";

const routes = [
  {
    exact: true,
    path: "/sign-in",
    component: lazy(() => import("views/auth/signIn/signIn"))
  },
  {
    layout: Main,
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/overview",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/transactions",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/accounts",
        component: lazy(() => import("views/accounts/accounts"))
      },
      {
        exact: true,
        path: "/budgets",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/debts",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/goals",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/categories",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/recipients",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/shops",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/analytics",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/calculators",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/settings",
        component: lazy(() => import("views/comingSoon"))
      },
      {
        exact: true,
        path: "/sign-out",
        component: lazy(() => import("views/auth/signOut/signOut"))
      }
    ]
  }
];

export { routes };
