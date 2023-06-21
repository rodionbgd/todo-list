/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/eslint-config-prettier",
        "plugin:prettier/recommended",
    ],
    rules: {
        "comma-dangle": "error",
        "no-prototype-builtins": "off",
        "no-unused-vars": ["error", {"args": "after-used", "ignoreRestSiblings": true}],
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                singleQuote: true,
                arrowParens: "avoid",
                pugAttributeSeparator: "none",
                trailingComma: "none",
            }
        ],
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        "vue/no-dupe-keys": [
            "error",
            {
                groups: [],
            },
        ],
        "prefer-destructuring": [
            "error",
            {
                "VariableDeclarator": {
                    "array": false,
                    "object": true
                },
                "AssignmentExpression": {
                    "array": false,
                    "object": false
                }
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        "prefer-const": ["error", {
            "destructuring": "all",
            "ignoreReadBeforeAssign": true
        }]
    },
    env: {
        node: true,
        es6: true,
        jquery: true
    },
};
