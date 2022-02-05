// base
import React from "react";

// libraries
import { Redirect, useLocation } from "react-router-dom";

// routes
import Routes from "routes/routes";

// utils
import { getJWT } from "shared/utils/jwt";

const App = () => {
  const location = useLocation();

  const token = getJWT();

  if (!token && !(location.pathname === "/signin")) {
    return <Redirect to="/signin" />;
  }

  if (token && location.pathname === "/signin") {
    return <Redirect to="/" />;
  }

  return <Routes />;
};

export default App;
