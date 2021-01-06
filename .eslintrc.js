module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true
    }
  },
  rules: {
    'camelcase': 2,
    'curly': 2,
    'brace-style': [2, '1tbs'],
    'quotes': [2, 'single'],
    'semi': [1, 'always'],
    'space-infix-ops': 2,
    'indent': ['error', 2]
  }
};
