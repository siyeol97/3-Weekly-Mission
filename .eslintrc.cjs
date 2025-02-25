module.exports = {
  root: true,
  env: { node: true, browser: true, es2020: true },
  extends: [
    'next',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', trailingComma: 'es5' }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
