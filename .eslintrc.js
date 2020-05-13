module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["jest-preprocess.js"]}],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    // Disabled because it doesn't seem to work
    "jsx-a11y/label-has-associated-control": "off",
  },
};
