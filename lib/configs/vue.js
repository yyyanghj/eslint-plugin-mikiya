module.exports = {
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },

  extends: [
    require.resolve('./typescript.js'),
    'plugin:vue/vue3-recommended',
    'prettier/vue'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      }
    },
  ],
  rules: {
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 5,
    }],
    'vue/no-v-html': 'off'
  }
}
