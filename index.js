

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
}

const rules = {
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

const base = {
  parserOptions,
  rules
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
      parserOptions,
      rules: {
        ...rules,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      },
      plugins: ['react-hooks'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/react'
      ],
    },
    'react-ts': {
      parserOptions,
      rules: {
        ...rules,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      },
      plugins: ['react-hooks'],
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
