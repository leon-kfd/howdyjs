module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  'globals': {
    'Vue': true,
    'VueRouter': true,
    'ELEMENT': true,
    'hljs': true,
    'marked': true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 'off',
    'eqeqeq': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
