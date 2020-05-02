const base = {
  parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 'off',
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

module.exports = {
  configs: {
    recommended: {
      ...base,
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
      ],
    },
    typescript: {
      ...base,
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
      ]
    },
    vue: {
      ...base,
      extends: [
        'plugin:vue/vue3-strongly-recommended',
        '@vue/prettier/recommended',
      ],
    },
    'vue-ts': {
      ...base,
      extends: [
        'plugin:vue/vue3-strongly-recommended',
        '@vue/typescript/recommended',
        '@vue/prettier/recommended',
        '@vue/prettier/@typescript-eslint'
      ],
    },
    react: {
      ...base,
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier/react'
      ],
    },
    'react-ts': {
      ...base,
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react'
      ],
    }
  }
};
