import {defineConfig, globalIgnores} from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    globalIgnores([
        '**/lib/**',
        '**/dist/**',
        '**/out/**',
        '**/node_modules/**'
    ]),
    js.configs.recommended,
    ts.configs.strict,
    ts.configs.stylistic,
    stylistic.configs.customize({
        arrowParens: true,
        commaDangle: 'never',
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true
    }),
    {
        rules: {
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/multiline-ternary': ['error', 'never'],
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/block-spacing': ['error', 'never'],
            '@stylistic/jsx-curly-brace-presence': ['error', 'always']
        }
    },
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ]
        }
    }
]);
