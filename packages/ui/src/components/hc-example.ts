import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('hc-example')
export class HCExample extends LitElement {
	static styles = css`
    :host {
      color: blue;
    }
  `;

	@property({type: String}) subtitle = 'This is a subtitle';

	readonly #name = 'World';

	render() {
		return html`
      <div>
					Hello, ${this.#name}!
        ${this.subtitle}!
      </div>
      <slot></slot>
    `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'hc-example': HCExample;
	}
}
