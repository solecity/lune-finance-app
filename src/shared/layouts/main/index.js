// base
import React from "react";
import PropTypes from "prop-types";

// custom components

const Main = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.any
};

export default Main;
