module.exports = {
  extends: [
    require.resolve('./basic.js'),
    'plugin:vue/vue3-recommended',
    '@vue/prettier/recommended',
    '@vue/prettier/@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/no-v-html': 'off',
  }
}
