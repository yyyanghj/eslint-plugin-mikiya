module.exports = {
  plugins: ['react-hooks'],
  extends: [
    require.resolve('./basic.js'),
    'plugin:react/recommended',
    'prettier/react'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
