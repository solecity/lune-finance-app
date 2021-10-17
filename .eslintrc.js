module.exports = {
  extends: [
    "../.eslintrc.js",
    "react-app",
    "react-app/jest",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  plugins: ["react"],
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": "warn",
    "import/no-anonymous-default-export": "off",
    "react/display-name": "off",
    "react/prop-types": "warn",
    "react/no-string-refs": "warn",
    "react/jsx-key": "warn",
    "no-var": "warn",
    "no-unused-vars": "warn",
    "no-delete-var": "warn",
    "no-console": "warn",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ]
  },
  env: {
    browser: true
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
};
