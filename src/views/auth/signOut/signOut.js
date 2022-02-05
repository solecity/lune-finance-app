// base
import React, { useEffect } from "react";

// libraries
import { useHistory } from "react-router-dom";

// api
import { signOut } from "shared/recoil/auth";

const SignOut = () => {
  const history = useHistory();

  useEffect(() => {
    signOut();
    history.push("/");
  }, []);

  return null;
};

SignOut.propTypes = {};

export default SignOut;
