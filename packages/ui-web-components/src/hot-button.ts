import HotElement from "./classes/hot-element.js";
import customElement from "./decorators/customElement.js";

@customElement("hot-button")
export class HotButton extends HotElement {
    static shadow = true;
    static template = /*html */ `
        <slot name="root"><slot>
    `;
    static styles = /* css */ `
        ::slotted([slot=root]) {
            all: unset;
            display: inline-flex;
            cursor: pointer;

            padding-inline: 0.5rem;
            padding-block: 0.5rem;

            background-color: lightgrey;
            border-radius: 0.25rem;
        }

        ::slotted([slot=root]:hover) {
            background-color: grey;
        }
    `;

    onMount() {
        const root = this.querySelector("[slot=root]");
    }
}
