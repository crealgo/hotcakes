import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('hc-header')
export class HCHeader extends LitElement {
	static styles = css`
    header {
			display: flex;
      background-color: blue;
			position: sticky;
			top: 0;
    }

		[data-push] {
			margin-left: auto;
		}
  `;

	render() {
		return html`
			<header>
				<div>
					Logo
				</div>
				<nav>
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</nav>
				<div data-push>
					<form @submit="${this.#handleSubmit}">
						<input aria-label="Search" name="search" type="search">
						<button type="submit">Search</button>
					</form>
				</div>
			</header>
    `;
	}

	#handleSubmit(event: Event) {
		event.preventDefault();
		const search = new FormData(event.target as HTMLFormElement).get('search') as string;
		console.log(search);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'hc-header': HCHeader;
	}
}
