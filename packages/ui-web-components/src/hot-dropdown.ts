import HotElement from "./classes/hot-element.js";
import customElement from "./decorators/customElement.js";

@customElement("hot-dropdown")
export class HotDropdown extends HotElement {
    static shadow = true;

    static template = /* html */ `
        <slot name="control"></slot>
        <slot name="content"></slot>
    `;

    static styles = /* css */ `
        :host {
            display: contents;
        }

        ::slotted([slot="control"]) {}

        ::slotted([slot="content"]) {
            margin: unset;
            border: solid 1px black;
            padding-inline: 0.25rem;
            padding-block: 0.5rem;

            flex-direction: column;
            gap: 0.5rem;

            background-color: yellow;
            width: max-content;

            position: fixed;
            position-area: bottom span-right;
            position-try-fallbacks: flip-inline, flip-block, flip-start;
        }

        ::slotted([slot="content"]:popover-open) {
            display: flex;
        }
    `;

    onMount(): void {
        const randomId = window.crypto.randomUUID();

        const control = this.querySelector<HTMLElement>("[slot=control] button");
        const content = this.querySelector<HTMLElement>("[slot=content]");

        control?.setAttribute("popovertarget", randomId);
        control?.style.setProperty("anchor-name", `--${randomId}`);

        content?.setAttribute("popover", "");
        content?.setAttribute("id", randomId);
        content?.style.setProperty("position-anchor", `--${randomId}`);
    }
}
