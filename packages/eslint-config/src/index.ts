import {defineConfig, globalIgnores} from 'eslint/config';
import {stylistic} from './config/stylistic.js';
import {typescript} from './config/typescript.js';
    import {base} from './config/base.js';

export default defineConfig([
    globalIgnores([
        '**/lib/**',
        '**/dist/**',
        '**/out/**',
        '**/node_modules/**'
    ]),
    ...base,
    ...typescript,
    ...stylistic
]);
