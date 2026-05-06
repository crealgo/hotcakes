'use client';

import { styled } from 'styled-components';
import { Icon } from './Icon.js';
import { Typography } from './Typography.js';

type TextProps = React.PropsWithChildren<{
    icon?: string | React.ComponentType;
}>;

const Root = styled(Typography)(({ theme }) => `
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${theme.color.text.primary};
`);

export const Text: React.FC<TextProps> = (props) => (
    <Root variant="body1">
        {props.icon && <Icon icon={props.icon} />}
        <span>{props.children}</span>
    </Root>
);
