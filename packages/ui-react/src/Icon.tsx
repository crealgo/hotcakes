'use client';

import { FontIcon } from './FontIcon.js';
import { SvgIcon } from './SvgIcon.js';

interface IconProps {
    icon: string | React.ComponentType;
}

export const Icon: React.FC<IconProps> = (props) => (typeof props.icon === 'string' ? <FontIcon icon={props.icon} /> : <SvgIcon icon={props.icon} />
);
