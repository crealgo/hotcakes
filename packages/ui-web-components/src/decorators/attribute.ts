import {HotElement} from '../classes/hot-element.js';

type AttributeDecorator<T, V> = (
    target: ClassAccessorDecoratorTarget<T, V>,
    context: ClassAccessorDecoratorContext<T, V>
) => ClassAccessorDecoratorResult<T, V>;

export const attribute: AttributeDecorator<HotElement, string | null> = (
    _target,
    context
) => {
    if (typeof context.name !== 'string') {
        throw new Error(`@attribute decorator only supports string attribute names, got ${typeof context.name}`);
    }

    const attributeName = context.name;

    return {
        get() {
            return this.getAttribute(attributeName);
        },
        set(value) {
            if (value) {
                this.setAttribute(attributeName, value);
            }
        },
        init(value) {
            return value;
        }
    };
};
