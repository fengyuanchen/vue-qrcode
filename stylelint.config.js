module.exports = {
  extends: 'stylelint-config-recommended-vue/scss',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'no-descending-specificity': null,
    'no-empty-source': null,
    'order/properties-alphabetical-order': true,
  },
};
