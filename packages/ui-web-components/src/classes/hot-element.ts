/**
 *
 * TODO:
 * - implement `@query` `@listener` `@observed`
 * - implement `render()`, remove template
 * - build typescript generator
 *  - should generate types
 *  - should use jsx, write a factory
 *  - way to insert styles into the DOM?
 */

export abstract class HotElement extends HTMLElement {
    static styles: string[];
    static disabledShadow: boolean;

    abstract render(): string;

    get #instance(): typeof HotElement {
        return this.constructor as typeof HotElement;
    }

    constructor() {
        super();

        if (this.#instance.disabledShadow) {
            this.innerHTML = this.render();
            document.adoptedStyleSheets.push(...this.#makeStylesheets());
        } else {
            const root = this.attachShadow({mode: 'open'});

            root.innerHTML = this.render();
            root.adoptedStyleSheets.push(...this.#makeStylesheets());
        }
    }

    #makeStylesheets() {
        return this.#instance.styles.map((styleString) => {
            const stylesheet = new CSSStyleSheet();

            stylesheet.replaceSync(styleString);

            return stylesheet;
        });
    }
}
