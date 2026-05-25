const prettierConfig = require('@paalstack/react-config/prettier');

module.exports = {
    ...prettierConfig.default,
  "tailwindStylesheet": "./packages/ui/src/styles/index.css"
};
