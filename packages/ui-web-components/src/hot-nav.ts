import HotElement from "./classes/hot-element.js";
import customElement from "./decorators/customElement.js";

@customElement("hot-nav")
export class HotNav extends HotElement {
    static shadow = true;
    static template = /* html */ `
        <slot></slot>
    `;
    static styles = /* css */ `
        :host {
            display: flex;
            background: yellow;
            gap: 0.5rem;
        }

        :host([variant=vertical]) {
            flex-direction: column;
        }
    `;
}
