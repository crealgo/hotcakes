import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {
	type ComponentPropsWithoutRef,
	type FC,
	type ReactElement,
	type MouseEvent,
} from 'react';
import {_e} from '../utils/excludePropsFromForwarding';
import {useSpring, animated} from '@react-spring/web';

export type ButtonBaseSizes = Size;

export type ButtonBaseProps = {
	readonly endIcon?: ReactElement;
	readonly startIcon?: ReactElement;
	readonly href?: string;
	readonly size?: ButtonBaseSizes;
	readonly color?: ColorVariant;
} & Omit<ComponentPropsWithoutRef<'button'>, 'color'>;

const StyledButton = styled('button', _e('endIcon', 'startIcon', 'size'))<ButtonBaseProps>(
	({size = 'medium'}) => css`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	border: none;
	outline: none;
	gap: var(--button-spacing-gap-${size});

	font-family: inherit;

	letter-spacing: -0.0156rem;
	white-space: nowrap;

	border-radius: 0.25rem;
`);

type ButtonIconProps = {
	start?: boolean;
	end?: boolean;
};

const ButtonIcon = styled('span', _e('end', 'start'))<ButtonIconProps>(
	({start, end}) => /* scss */ `
	svg {
		height: 0.875em;
		width: 0.875em;
	}

	display: inline-flex;
	${start ? 'margin-left: -0.25rem;' : ''}
	${end ? 'margin-right: -0.25rem;' : ''}
`,
);

export const ButtonBase: FC<ButtonBaseProps> = ({
	children, startIcon, endIcon, onClick, ...props
}) => {
	const [buttonSpring] = useSpring(() => ({
		scale: 1,
		opacity: 1,
		from: {
			scale: 0.75,
			opacity: 2,
		},
	}));

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		console.log(
			event.clientX - event.currentTarget.offsetLeft,
			event.clientY - event.currentTarget.offsetTop,
		);
	};

	return (
		<StyledButton
			{...props}
			role='button'
			onClick={handleClick}
		>
			<animated.div style={buttonSpring}/>
			{startIcon && (
				<ButtonIcon start className='Button-icon Button-startIcon'>
					{startIcon}
				</ButtonIcon>
			)}
			{children}
			{endIcon && (
				<ButtonIcon end className='Button-icon Button-endIcon'>
					{endIcon}
				</ButtonIcon>
			)}
		</StyledButton>
	);
};
