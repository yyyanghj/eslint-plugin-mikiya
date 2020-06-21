const base = require('./base')
const merge = require('lodash.merge')


module.exports = merge({}, base, {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier/recommended',
    '@vue/prettier/@typescript-eslint'
  ],
})
