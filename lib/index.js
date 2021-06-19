module.exports = {
  configs: {
    typescript: {
      extends: [
        require.resolve('./configs/basic'),
        require.resolve('./configs/typescript'),
        require.resolve('./configs/prettier'),
      ],
    },

    vue: {
      extends: [
        require.resolve('./configs/basic'),
        require.resolve('./configs/typescript'),
        require.resolve('./configs/vue'),
        require.resolve('./configs/prettier'),
      ],
    },

    react: {
      extends: [
        require.resolve('./configs/basic'),
        require.resolve('./configs/typescript'),
        require.resolve('./configs/react'),
        require.resolve('./configs/prettier'),
      ],
    },

    all: {
      extends: [
        require.resolve('./configs/basic'),
        require.resolve('./configs/typescript'),
        require.resolve('./configs/vue'),
        require.resolve('./configs/react'),
        require.resolve('./configs/prettier'),
      ],
    },
  },
};
