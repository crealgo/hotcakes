export default abstract class HotcakesElement extends HTMLElement {
    static styles: string;
    static template: string;
    static disabledShadow: boolean;

    #staticInstance: typeof HotcakesElement;

    constructor() {
        super();

        this.#staticInstance = this.constructor as typeof HotcakesElement;

        if (!this.#staticInstance.disabledShadow) {
            this.attachShadow({mode: 'open' });
        }
    }
}
