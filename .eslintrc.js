module.exports = {
  "env": {
    "browser": true,
    "commonjs": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "./"]
      }
    }
  },
  "extends": "standard",
  "globals": {
    "$$PREBID_GLOBAL$$": false
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "comma-dangle": "off",
    "semi": "off",
    "space-before-function-paren": "off",

    // Exceptions below this line are temporary, so that eslint can be added into the CI process.
    // Violations of these styles should be fixed, and the exceptions removed over time.
    //
    // See Issue #1111.
    "eqeqeq": "off",
    "no-return-assign": "off",
    "no-throw-literal": "off",
    "no-undef": "off",
    "no-useless-escape": "off",
  }
};
