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

`HotcakesElement` extends `HTMLElement` and handles shadow DOM attachment automatically in the constructor. Define static `styles` and `template` strings on your subclass, then render them in `connectedCallback` using `innerHTML` on the shadow root for one-time static setup, and `appendChild`/`append` for any dynamic content after that.

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

    connectedCallback() {
        // innerHTML is fine here: shadow root is empty and content is static
        this.shadowRoot!.innerHTML = `
            <style>${MyButton.styles}</style>
            ${MyButton.template}
        `;
    }
}
```

For dynamic children, use `append`/`appendChild` — it preserves event listeners and correctly triggers custom element lifecycle callbacks, whereas `innerHTML` would destroy and recreate existing nodes:

```ts
connectedCallback() {
    const icon = document.createElement('my-icon');
    icon.setAttribute('name', 'arrow');
    this.shadowRoot!.append(icon);
}
```

### Shadow DOM vs. light DOM

| Mode | How to enable | Style scoping |
|---|---|---|
| Shadow DOM (default) | — | Scoped to element via `:host` |
| Light DOM | `static disabledShadow = true` | Global via `document.adoptedStyleSheets` |

When `disabledShadow = true`, the decorator automatically inserts the element's `styles` into `document.adoptedStyleSheets` so styles still load without a shadow root.

### Registering without decorators

```ts
import HotcakesElement from '@hotcakes/ui-web-components/hotcakes-element.js';

class MyElement extends HotcakesElement {
    static styles = `
        :host { display: block; }
    `;

    connectedCallback() {
        this.shadowRoot!.innerHTML = `
            <style>${MyElement.styles}</style>
            <slot></slot>
        `;
    }
}

customElements.define('my-element', MyElement);
```
