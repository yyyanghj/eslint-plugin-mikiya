module.exports = {
  plugins: ['react-hooks'],
  extends: [require.resolve('./typescript.js'), 'plugin:react/recommended'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
