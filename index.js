
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
      plugins: ['prettier'],
      rules: {
        ...prettierRule,
      }
    },
    vue: {
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:vue/vue3-recommended',
        '@vue/prettier',
      ],
      plugins: ['vue', 'prettier'],
      rules: {
        ...prettierRule,
      }
    },
    'vue-ts': {
      extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
      ],
      plugins: ['vue', 'prettier'],
      rules: {
        ...prettierRule,
      }
    },
    react: {
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/react'
      ],
      plugins: ['react', 'prettier'],
      rules: {
        ...prettierRule,
      }
    },
    'react-ts': {
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react'
      ],
      plugins: ['react', 'prettier', '@typescript-eslint',],
      rules: {
        ...prettierRule,
      }
    },
    typescript: {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier'],
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
    }
  }
};
