module.exports = {
  extends: ["prettier", "plugin:json/recommended"],
  parserOptions: {
    ecmaVersion: 9,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-var": "warn",
    "no-unused-vars": "warn",
    "no-delete-var": "warn",
    "no-console": "warn",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
