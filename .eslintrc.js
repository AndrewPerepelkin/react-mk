module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['react'],
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': [
      'error',
      {anonymous: 'always', named: 'never'}
    ],
    'multiline-ternary': 0,
    'object-curly-spacing': ['error', 'never'],
    indent: 0,
    'arrow-body-style': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/function-component-definition': 0,
    'linebreak-style': ['error', 'windows'],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': 0
  }
};
