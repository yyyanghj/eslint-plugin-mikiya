const base = require('./base')
const merge = require('lodash.merge')


module.exports = merge({}, base, {
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/prettier/recommended',
  ],
})
