import React from "react";

export const CreditCard = ({ colour }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.47 9.91H2"
        stroke={colour}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M19.14 4H5.33C3.49089 4 2 5.49089 2 7.33V17.06C2 18.8991 3.49089 20.39 5.33 20.39H19.14C20.9791 20.39 22.47 18.8991 22.47 17.06V7.33C22.47 5.49089 20.9791 4 19.14 4Z"
        stroke={colour}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M10.11 16.24H5.25"
        stroke={colour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
