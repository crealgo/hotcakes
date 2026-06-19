import HCElement from './classes/hc-element.js';
import {hcElement} from './decorators/hc-element.js';
import {observed} from './decorators/observed.js';

type ButtonVariant = 'primary' | 'secondary';

declare global {
    interface HTMLElementTagNameMap {
        'hc-button': HCButton;
    }
}

hcElement('hc-button');
export class HCButton extends HCElement {
    static template = /* html */`
        <button>
            <slot></slot>
        </button>
    `;

    static style = /* css */`
        button {

        }
    `;

    @observed accessor variant: ButtonVariant = 'primary';
}
