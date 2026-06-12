import HotcakesElement from "../hotcakes-element.js";

        export function hotcakesElement(componentName: string) {
    return (Constructor: CustomElementConstructor & typeof HotcakesElement) => {
        if (customElements.get(componentName)) {
            return;
        }

        if (Constructor.disabledShadow && Constructor.styles) {
                const stylesheet = new CSSStyleSheet();

                stylesheet.replaceSync(Constructor.styles);
                document.adoptedStyleSheets.push(stylesheet);
        }

        customElements.define(componentName, Constructor);
    }
}
