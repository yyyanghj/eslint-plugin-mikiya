module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        printWidth: 100,
        endOfLine: 'auto',
        bracketSpacing: true,
      },
    ],
  },
}
