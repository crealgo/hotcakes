import '../utilties/decorator-context-shim.js';
import {HotElement} from '../classes/hot-element.js';

type CustomHotElementDecorator = (componentName: string) => (
    Constructor: CustomElementConstructor & typeof HotElement
) => void;

export const customHotElement: CustomHotElementDecorator = (componentName) => {
    return (Constructor) => {
        if (customElements.get(componentName)) {
            return;
        }

        customElements.define(componentName, Constructor);
    };
};
