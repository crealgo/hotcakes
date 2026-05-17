'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';

type DotProps = {} & Partial<React.ComponentPropsWithRef<'span'>>;

export const Dot = forwardRef<HTMLDivElement, DotProps>((props, ref) => (
    <span
        {...props}
        ref={ref}
        className={clsx('inline-flex w-2 h-2 rounded-full border', props.className)}
        children=""
    />
));

Dot.displayName = 'Dot';
