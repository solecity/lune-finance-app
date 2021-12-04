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
    routes: []
  }
];

export { routes };
