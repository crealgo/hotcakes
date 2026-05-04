import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    globalIgnores([
        "**/lib/**",
        "**/dist/**",
        "**/out/**",
        "**/node_modules/**"
    ]),
    js.configs.recommended,
    ts.configs.strict,
    stylistic.configs.customize({
        arrowParens: true,
        commaDangle: "never",
        indent: 4,
        quotes: "double",
        semi: true,
        jsx: true
    })
]);
