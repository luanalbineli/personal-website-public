const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    {
        languageOptions: {
            globals: { ...globals.node, ...globals.browser },
        },
    },
    js.configs.recommended,
    eslintPluginPrettierRecommended,
];
