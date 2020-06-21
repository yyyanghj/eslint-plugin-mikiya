const base = require('./base')
const merge = require('lodash.merge')


module.exports = merge({}, base, {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
})
