import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin'

const indentation = 4;

export default defineConfig([{
    extends: ["js/all"],
    files: ['**/*.js'],
    languageOptions: { globals: globals.browser },
    plugins: {
        "@stylistic": stylistic,
        js,
    },
    rules: {
        "@stylistic/indent": ["error", indentation],
        "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    }
}]);