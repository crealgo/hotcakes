'use client';

import {forwardRef} from 'react';

interface ColorChipProps {
    name: string;
    hex: string;
}

export const ColorChip = forwardRef<HTMLDivElement, ColorChipProps>((props, ref) => (
    <div
        ref={ref}
        className={'col-span-1 cursor-pointer transition will-change-transform hover:-translate-y-1.5'}
    >
        <div className={'border border-slate-300 rounded-md shadow overflow-hidden bg-white'}>
            <div
                className={'w-full aspect-square overflow-hidden rounded-t-md p-2 border-b border-slate-300'}
                style={{
                    backgroundColor: props.hex
                }}
            />
            <div className={'px-3 py-2'}>
                <div className={'subtitle1 truncate'}>{props.name}</div>
                <div className={'font-mono text-slate-500 text-sm'}>{props.hex}</div>
            </div>
        </div>
    </div>
));
