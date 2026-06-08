'use client';

import clsx from 'clsx';
import {forwardRef} from 'react';
import {HelperText} from './HelperText.js';

export type FilterRadioGroupProps = Pick<HTMLElement, 'className'> & React.PropsWithChildren<{
    labelClassName?: React.ComponentPropsWithRef<'div'>['className'];
    rootClassName?: React.ComponentPropsWithRef<'div'>['className'];
    multiple?: boolean;
    filters?: Project.Tag[];
    label?: string;
    helperText?: string;
    onChange?: (e: React.ChangeEvent, value: React.ComponentPropsWithRef<'input'>['value']) => void;
}>;

export const FilterRadioGroup = forwardRef<HTMLDivElement, FilterRadioGroupProps>((props, ref) => (
    <div ref={ref} className={clsx('flex flex-wrap', props.rootClassName)}>
        {props.label && <div className={clsx('subtitle2 mb-2', props.labelClassName)}>{props.label}</div>}
        <div className={clsx('flex items-center', props.className)}>{props.children}</div>
        {props.helperText && (
            <HelperText icon={'help'}>{props.helperText}</HelperText>
        )}
    </div>
)
);

FilterRadioGroup.displayName = 'FilterRadioGroup';
