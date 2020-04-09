module.exports = {
  configs: {
    recommended: {
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      rules: {
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
            bracketSpacing: true,
          },
        ],
      },
    },
    vue: {
      extends: ['plugin:vue/strongly-recommended', 'prettier/vue'],
    },
    react: {
      extends: ['plugin:react/recommended', 'prettier/react'],
    },
    typescript: {
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
    },
  },
};
