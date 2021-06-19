module.exports = {
  extends: [require.resolve('./typescript.js'), 'plugin:vue/vue3-recommended'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  rules: {
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 5,
      },
    ],
    'vue/no-v-html': 'warn',
  },
};
