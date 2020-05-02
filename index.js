
const prettierRule = {
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

module.exports = {
  configs: {
    recommended: {
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      rules: {
        ...prettierRule,
      }
    },
    typescript: {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
      ],
      rules: {
        ...prettierRule,
      }
    },
    vue: {
      extends: [
        'plugin:vue/vue3-recommended',
        '@vue/prettier/recommended',
      ],
      rules: {
        ...prettierRule,
      }
    },
    'vue-ts': {
      extends: [
        '@vue/typescript/recommended',
        'plugin:mikiya/vue',
        '@vue/prettier/@typescript-eslint'
      ],
    },
    react: {
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        "plugin:react-hooks/recommended",
        'plugin:prettier/recommended',
        'prettier/react'
      ],
      rules: {
        ...prettierRule,
      },
      overrides: [
        {
          files: ['**/*.ts?(x)'],
          parserOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            ecmaFeatures: {
              jsx: true,
            },
            // typescript-eslint specific options
            warnOnUnsupportedTypeScriptVersion: true,
          },
          extends: [
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:mikiya/react',
            'plugin:@typescript-eslint/recommended',
            'prettier/@typescript-eslint'
          ]
        }
      ]
    },
  }
};
