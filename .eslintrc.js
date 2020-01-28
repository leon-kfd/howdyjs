module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  globals: {
    Vue: true,
    VueRouter: true,
    ELEMENT: true,
    hljs: true,
    marked: true
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": "off",
    "no-new": "off",
    eqeqeq: "off",
    "no-trailing-spaces": "off",
    semi: "off",
    "no-prototype-builtins": "off",
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
