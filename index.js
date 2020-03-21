module.exports = {
  configs: {
    recommended: {
      extends: ['eslint:recommended', 'plugin:prettier/recommended']
    },
    vue: {
      extends: ['plugin:vue/recommended', 'prettier/vue']
    },
    react: {
      extends: ['plugin:react/recommended', 'prettier/react']
    },
    typescript: {
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
      ]
    }
  }
};
