'use client';

import {styled} from 'styled-components';
import {Typography} from './Typography.js';

type LinkProps = React.ComponentPropsWithRef<'a'>;

const StyledLink = styled.a(({theme}) => `
    cursor: pointer;
    gap: ${theme.spacing(0.25)};
    color: ${theme.color.slate[500]};
    text-decoration: none;

    &:hover,
    &:focus,
    &:focus-visible {
        color: ${theme.color.slate[700]};
    }

    &[data-active=true] {
        color: ${theme.color.slate[900]};
    }
`);

export const LinkLarge: React.FC<LinkProps> = (props) => (
    <StyledLink
        {...props}
        className={'LinkLarge-root'}
    >
        <Typography variant={'display2'} as={'span'}>
            {props.children}
        </Typography>
    </StyledLink>
);
