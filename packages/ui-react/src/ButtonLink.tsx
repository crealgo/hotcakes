'use client';

import { ButtonBase } from './ButtonBase.js';
import { Icon } from './Icon.js';

type Props = ControlProps<HTMLAnchorElement> & {
    readonly href?: string;
};

export const ButtonLink: React.FC<Props> = (props) => (
    <ButtonBase {...props} as="a">
        {props.icon && <Icon icon={props.icon} />}
        {props.children}
    </ButtonBase>
);
