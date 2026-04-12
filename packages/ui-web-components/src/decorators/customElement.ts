import type { HotElementConstrutor } from "../classes/hot-element.js";

export default function customElement(elementName: string, options?: ElementDefinitionOptions) {
    return (Constructor: HotElementConstrutor) => {
        // // inject styles into light dom, or pass to constructor
        if (Constructor.styles) {
            const stylesheet = new CSSStyleSheet();
            stylesheet.replaceSync(Constructor.styles);

            if (Constructor.shadow) {
                Constructor._styles = stylesheet;
            } else {
                document.adoptedStyleSheets.push(stylesheet);
            }
        }

        // //
        if (Constructor.shadow && Constructor.template) {
            Constructor._template = document.createElement("template");
            Constructor._template.innerHTML = Constructor.template;
        }

        if (!customElements.get(elementName)) {
            customElements.define(elementName, Constructor, options);
        }
    };
}
