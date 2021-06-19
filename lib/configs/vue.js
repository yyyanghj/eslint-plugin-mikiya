module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['plugin:vue/vue3-recommended', require.resolve('./prettier.js')],
      rules: {
        'vue/max-attributes-per-line': [
          'warn',
          {
            singleline: 5,
          },
        ],
        'vue/no-v-html': 'warn',
      },
    },
  ],
};
