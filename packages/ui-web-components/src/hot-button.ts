import {HotElement} from './classes/hot-element.js';
import {customHotElement} from './decorators/custom-hot-element.js';

declare global {
    interface HTMLElementTagNameMap {
        'hc-button': HotButton;
    }
}

@customHotElement('hot-button')
export class HotButton extends HotElement {
    static styles = [/* css */`
        button {}
    `];

    render() {
        return /* html */`
            <button>
                <slot></slot>
            </button>
        `;
    }
}
