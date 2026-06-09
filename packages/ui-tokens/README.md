# @hotcakes/ui-tokens

Design tokens for the Hotcakes UI system. Built with [Style Dictionary](https://styledictionary.com) from Material color utilities and inlined Tailwind CSS values. Outputs CSS custom properties, SCSS variables, and a JSON token map.

## Installation

```bash
npm install @hotcakes/ui-tokens
# or
pnpm add @hotcakes/ui-tokens
```

## Usage

### CSS

Import the stylesheet to get all tokens as CSS custom properties on `:root`:

```css
@import '@hotcakes/ui-tokens/tokens.css';
```

```css
.button {
    background-color: var(--color-brand-primary-neutral);
    border-radius: var(--shape-rounding-medium);
    height: var(--input-height-medium);
}
```

### SCSS

```scss
@use '@hotcakes/ui-tokens/tokens.scss';

.button {
    background-color: $color-brand-primary-neutral;
}
```

### JavaScript / TypeScript

```ts
import tokens from '@hotcakes/ui-tokens/tokens.json';

console.log(tokens.color.brand.primary.neutral); // #0082a1
```

## Token categories

| Category | Description |
|---|---|
| `color` | Brand palette (primary, secondary, tertiary), feedback states, text, and gray scale — each color includes `main`, `light`, `dark`, `contrast`, and more tonal variants |
| `spacing` | Full Tailwind-compatible spacing scale (`0` → `96`) |
| `shape` | Border radii (`none` → `full`) and aspect ratios |
| `type` | Heading and body typography — font family, weight, size, and line-height at small/medium/large breakpoints |
| `elevation` | Box shadow scale (`0` → `6`) and inset shadow |
| `input` / `button` | Component-level tokens for sizing, padding, and border across small/medium/large sizes |

## Building tokens locally

```bash
pnpm build       # generate lib/tokens.css, lib/tokens.scss, lib/tokens.json
pnpm start       # watch mode — rebuilds on source changes
```
