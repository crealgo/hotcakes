interface HotElementInterface {
    /**
     * Internal stylesheet instance. This gets set in @customElement decorator.
     */
    _styles?: CSSStyleSheet;

    /**
     * Internal template instance. This gets set in @customElement decorator.
     */
    _template?: HTMLTemplateElement;

    /**
     * This is used for typescript signature matching between interface and class
     */
    _signature?: undefined;

    onMount?(): void;
}

export interface HotElementConstrutor extends HotElementInterface {
    new (): HotElement;
    shadow?: boolean;
    template?: string;
    styles?: string;
}

export default abstract class HotElement extends HTMLElement implements HotElementInterface {
    static shadow?: boolean;
    static template?: string;
    static styles?: string;

    #instance: HotElementConstrutor;
    _signature = undefined;

    constructor() {
        super();

        this.#instance = this.constructor as HotElementConstrutor;

        if (this.#instance.shadow) {
            this.attachShadow({ mode: "open" });
            this.#setupStyles();
            this.#setupTemplate();
        }

        this.onMount.call(this);
    }

    #setupStyles() {
        if (this.#instance._template) {
            this.shadowRoot?.appendChild(this.#instance._template.content.cloneNode(true));
        }
    }

    #setupTemplate() {
        if (this.#instance._styles) {
            this.shadowRoot?.adoptedStyleSheets.push(this.#instance._styles);
        }
    }

    onMount() {}
}
