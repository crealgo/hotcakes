# @hotcakes/eslint-config

Shared ESLint flat config for Hotcakes projects. Enforces a consistent code style across JavaScript and TypeScript with strict type checking and opinionated formatting rules.

## Installation

```bash
npm install --save-dev @hotcakes/eslint-config
# or
pnpm add -D @hotcakes/eslint-config
```

## Usage

```js
// eslint.config.js
import hotcakesConfig from '@hotcakes/eslint-config';

export default hotcakesConfig;
```

To extend or override rules:

```js
// eslint.config.js
import hotcakesConfig from '@hotcakes/eslint-config';

export default [
    ...hotcakesConfig,
    {
        rules: {
            // your overrides
        },
    },
];
```

## What's included

- **`@eslint/js`** recommended rules
- **`typescript-eslint`** strict + stylistic rule sets
- **`@stylistic/eslint-plugin`** for formatting, configured with:
  - 4-space indentation
  - Single quotes
  - Semicolons
  - Arrow function parentheses
  - No trailing commas
  - JSX support

### Notable rule overrides

| Rule | Setting |
|---|---|
| `@stylistic/object-curly-spacing` | `never` |
| `@stylistic/block-spacing` | `never` |
| `@stylistic/multiline-ternary` | `never` |
| `@stylistic/quote-props` | `as-needed` |
| `@stylistic/jsx-curly-brace-presence` | `always` |
| `@typescript-eslint/no-unused-vars` | error, with `_` prefix ignored |

### Default ignores

`lib/`, `dist/`, `out/`, `node_modules/`

## Requirements

- ESLint 9 or 10
- TypeScript 5.x

## License

MIT
