# @hotcakes/ui-web-components

Framework-agnostic Web Components built on the native custom elements API. Provides a base class (`HotcakesElement`) and decorators for registering elements with optional shadow DOM support.

## Installation

```bash
npm install @hotcakes/ui-web-components
# or
pnpm add @hotcakes/ui-web-components
```

## Usage

### Extending the base class

`HotcakesElement` extends `HTMLElement` and handles shadow DOM attachment automatically. Set `disabledShadow = true` to opt out and use the light DOM instead (styles are adopted globally via `document.adoptedStyleSheets`).

```ts
import HotcakesElement from '@hotcakes/ui-web-components/hotcakes-element.js';
import {hotcakesElement} from '@hotcakes/ui-web-components/utils/hotackes-element-decorator.js';

@hotcakesElement('my-button')
class MyButton extends HotcakesElement {
    static styles = `
        :host { display: inline-flex; }
        button { padding: 0.5rem 1rem; }
    `;

    static template = `<button><slot></slot></button>`;
}
```

### Shadow DOM vs. light DOM

| Mode | How to enable | Style scoping |
|---|---|---|
| Shadow DOM (default) | — | Scoped to element |
| Light DOM | `static disabledShadow = true` | Global via `adoptedStyleSheets` |

### Registering without decorators

```ts
import HotcakesElement from '@hotcakes/ui-web-components/hotcakes-element.js';

class MyElement extends HotcakesElement {
    static styles = `...`;
}

customElements.define('my-element', MyElement);
```
