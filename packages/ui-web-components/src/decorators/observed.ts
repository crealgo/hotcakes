export function observed<This extends HTMLElement, Value extends string | null>(
    _target: ClassAccessorDecoratorTarget<This, Value>,
    context: ClassAccessorDecoratorContext<This, Value>
): ClassAccessorDecoratorResult<This, Value> {
    return {
        get() {
            const attribute = this.getAttribute(context.name.toString());

            return (attribute ?? '') as Value;
        },
        set(value) {
            if (value) {
                this.setAttribute(context.name.toString(), value);
            }
        },
        init(value) {
            return value;
        }
    };
}
