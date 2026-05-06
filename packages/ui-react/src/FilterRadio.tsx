'use client';

import { forwardRef, useState } from 'react';
import { createRipple } from './utils/createRipple.js';

export type FilterRadioProps = {
    dot?: string;
} & Partial<JSX.IntrinsicElements['input']>;

export const FilterRadio = forwardRef<HTMLInputElement, FilterRadioProps>((props, ref) => {
    const [, setFocused] = useState<boolean>(false);

    return (
        <label
            // className={clsx(
            //     styles.root,
            //     checked ? styles['variant-filled'] : styles['variant-contained'],
            //     {[styles['color-brand']]: checked},
            //     {[styles.checked]: focused},
            //     {[styles.focused]: focused},
            //     styles['size-medium'],
            //     className,
            // )}
            htmlFor={props.id}
            onClick={createRipple}
        >
            <input
                {...props}
                ref={ref}
                type="radio"
                onFocus={(event) => {
                    props.onFocus?.(event);
                    setFocused(true);
                }}
                onBlur={(event) => {
                    props.onBlur?.(event);
                    setFocused(false);
                }}
            />
            {props.children}
        </label>
    );
}
);

FilterRadio.displayName = 'FilterRadio';
