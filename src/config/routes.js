// base
import { lazy } from "react";

// layouts

const routes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("views/notFound"))
  }
];

export { routes };
