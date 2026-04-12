// import {styled} from '@mui/material';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {type ComponentPropsWithRef} from 'react';
import {_e} from '../utils/excludePropsFromForwarding';

export type BlockProps = {
	readonly color?: Exclude<ColorVariant, 'text'> | 'grey';
	readonly isRounded?: boolean;
	readonly isClipped?: boolean;
	readonly isElevated?: boolean;
} & ComponentPropsWithRef<'div'>;

export const Block = styled(
	'div',
	_e('hasNoDefaultMargin', 'title', 'color', 'isRounded', 'isClipped', 'hasNoHorizontalPadding'),
)<BlockProps>(({theme, ...props}) => {
	const resolvedColor = props.color ?? 'default';
	const borderColor = resolvedColor === 'default' ? 'transparent' : `var(--color-brand-${resolvedColor}-lighter)`;

	return css`
		${props.isClipped && 'overflow: hidden;'}

		${theme.breakpoints.up('md')} {
			border-top: solid 1px ${borderColor};
			border-right: solid 1px ${borderColor};
			border-bottom: solid 1px ${borderColor};
			border-left: solid 1px ${borderColor};

			${props.isElevated && 'var(--elevation-4);'}
			${props.isRounded && 'border-radius: var(--section-border-radius);'}
		}
	`;
},
);
