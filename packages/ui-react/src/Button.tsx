'use client';

import { ButtonBase } from './ButtonBase.js';
import { Icon } from './Icon.js';

export const Button: React.FC<ControlProps> = (props) => (
    <ButtonBase {...props}>
        {props.icon && <Icon icon={props.icon} />}
        {props.children}
    </ButtonBase>
);
