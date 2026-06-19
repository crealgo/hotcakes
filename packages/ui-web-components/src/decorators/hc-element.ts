import HotcakesElement from '../classes/hc-element.js';

export function hcElement(componentName: string) {
    return (Constructor: CustomElementConstructor & typeof HotcakesElement) => {
        if (customElements.get(componentName)) {
            return;
        }

        if (Constructor.styles && Constructor.disabledShadow) {
            const stylesheet = new CSSStyleSheet();

            stylesheet.replaceSync(Constructor.styles);
            document.adoptedStyleSheets.push(stylesheet);
        }

        customElements.define(componentName, Constructor);
    };
}
