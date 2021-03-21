module.exports = {
  parser: '@typescript-eslint/parser',

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    '@typescript-eslint',
    'prettier'
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        printWidth: 100,
        trailingComma: 'all',
        endOfLine: 'auto',
        bracketSpacing: true
      }
    ]
  }
}
