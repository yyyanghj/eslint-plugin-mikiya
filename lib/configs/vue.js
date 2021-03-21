module.exports = {
  extends: [
    require.resolve('./base.js'),
    '@vue/prettier/recommended',
    '@vue/prettier/@typescript-eslint',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 4,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}
