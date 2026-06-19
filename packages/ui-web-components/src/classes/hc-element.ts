export default abstract class HCElement extends HTMLElement {
    static styles: string;
    static template: string;
    static disabledShadow: boolean;

    constructor() {
        super();

        const instance = this.constructor as typeof HCElement;

        if (instance.disabledShadow) {
            return;
        }

        this.attachShadow({mode: 'open'});
        this.setupStyles(instance);
        this.setupTemplate(instance);
    }

    private setupStyles(instance: typeof HCElement) {
        if (instance.styles) {
            const stylesheet = new CSSStyleSheet();

            stylesheet.replaceSync(instance.styles);
            this.shadowRoot?.adoptedStyleSheets.push(stylesheet);
        }
    }

    private setupTemplate(instance: typeof HCElement) {
        if (instance.template) {
            const template = document.createElement('template');

            template.innerHTML = instance.template;
            this.shadowRoot?.appendChild(template.content.cloneNode(true));
        }
    }
}
