module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'arrow-parens': ['error', 'as-needed'],
    'react/display-name': 0,
    quotes: ['error', 'single'],
    'prettier/prettier': 0,
  },
};
