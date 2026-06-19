import stylisticLink from '@stylistic/eslint-plugin';
import {defineConfig} from 'eslint/config';
import {INDENT_SIZE} from './constants.js';

export const stylistic = defineConfig(
    stylisticLink.configs.customize({
        indent: [INDENT_SIZE, {SwitchCase: 1}],
        quotes: 'single',
        pluginName: '@stylistic',
        semi: true,
        arrowParens: true,
        severity: 'error',
        commaDangle: 'never',
        braceStyle: '1tbs',
        blockSpacing: true,
        quoteProps: 'as-needed',
        jsx: true
    }),
    {
        rules: {
            '@stylistic/object-curly-spacing': ['error', 'never', {
                overrides: {
                    TSMappedType: 'always',
                    TSTypeLiteral: 'always'
                }
            }],
            '@stylistic/no-extra-semi': ['error'],
            '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
            '@stylistic/jsx-quotes': ['error', 'prefer-single'],
            '@stylistic/jsx-tag-spacing': ['error', {
                closingSlash: 'never',
                beforeSelfClosing: 'never',
                afterOpening: 'never',
                beforeClosing: 'never'
            }],
            '@stylistic/quote-props': ['error', 'consistent'],
            '@stylistic/object-curly-newline': [
                'error',
                {
                    ExportDeclaration: 'never',
                    ImportDeclaration: 'never',
                    ObjectExpression: {
                        multiline: true,
                        minProperties: 2,
                        consistent: true
                    },
                    ObjectPattern: {
                        multiline: true,
                        minProperties: 2,
                        consistent: true

                    }
                }
            ],
            '@stylistic/jsx-max-props-per-line': ['error', {maximum: 1}],
            '@stylistic/jsx-curly-newline': ['error'],
            '@stylistic/padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always', prev: '*', next: 'return'
                },
                {
                    blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'
                },
                {
                    blankLine: 'always', prev: 'import', next: '*'
                },
                {
                    blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']
                },
                {
                    blankLine: 'never', prev: 'import', next: 'import'
                }
            ],
            '@stylistic/jsx-curly-brace-presence': ['error', 'always'],
            '@stylistic/jsx-closing-tag-location': ['error'],
            '@stylistic/no-mixed-operators': ['off'],
            '@stylistic/jsx-one-expression-per-line': ['off'],
            '@stylistic/multiline-ternary': ['error', 'never'],
            '@stylistic/operator-linebreak': ['off']
        }
    }
);
