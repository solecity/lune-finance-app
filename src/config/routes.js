// base
import { lazy } from "react";

// layouts

const routes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("views/auth/signIn/signIn"))
  }
];

export { routes };
