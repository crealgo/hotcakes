import {defineConfig} from 'eslint/config';
import ts from 'typescript-eslint';

export const typescript = defineConfig(
    ...ts.configs.recommended.map((config) => ({
        ...config,
        files: ['**/*.ts', '**/*.tsx']
    })),
    ts.configs.strictTypeChecked,
    ts.configs.stylisticTypeChecked,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                projectService: true
            }
        },
        rules: {
            // Turn off base rules that TS handles
            'no-undef': 'off',
            'getter-return': 'off',
            'no-import-assign': 'off',
            'no-new-native-nonconstructor': 'off',
            'no-setter-return': 'off',

            // TypeScript overrides over JavaScript (from @deere/eslint-config)
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/ban-ts-comment': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error',
            '@typescript-eslint/prefer-readonly': 'error',
            '@typescript-eslint/prefer-regexp-exec': 'error',
            '@typescript-eslint/consistent-type-definitions': 'off',

            // Disable base rules that have TS equivalents
            'camelcase': 'off',
            'no-shadow': 'off',
            'no-duplicate-imports': 'off',
            'no-unused-vars': 'off',
            'no-use-before-define': 'off',
            'no-unused-expressions': 'off',
            'no-redeclare': 'off',

            // TS equivalents of the disabled base rules
            '@typescript-eslint/naming-convention': ['error',
                {
                    selector: 'default',
                    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow'
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase']
                },
                {
                    selector: [
                        'classProperty', 'objectLiteralProperty', 'typeProperty',
                        'classMethod', 'objectLiteralMethod', 'typeMethod',
                        'accessor', 'enumMember'
                    ],
                    format: null,
                    modifiers: ['requiresQuotes']
                }
            ],
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-unused-vars': ['error', {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                ignoreRestSiblings: true,
                varsIgnorePattern: '^_'
            }],
            '@typescript-eslint/no-use-before-define': 'error',
            '@typescript-eslint/no-unused-expressions': ['error', {
                allowTernary: true
            }],
            '@typescript-eslint/no-redeclare': 2,
            'prefer-rest-params': 'error',
            'named': 'off'
        }
    }
);
