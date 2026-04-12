import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {ButtonBase, type ButtonBaseProps} from './ButtonBase';

export type ButtonProps = {
	readonly color?: BrandColor;
} & ButtonBaseProps;

export const Button = styled(ButtonBase)<ButtonProps>(({
	theme, size = 'medium', color = 'primary', ...props
}) => css`
	border-radius: ${theme.button.bezel[size]};
	font-weight: ${theme.button.font.weight};
	font-size: ${theme.button.font.size[size]};
	letter-spacing: ${theme.button.letterSpacing};

	background-color: ${theme.button.backgroundColor[color]};
	box-shadow: ${theme.button.shadow[color]};
	color: ${theme.button.textColor[color]};
	border: ${theme.button.border[color]};

	text-decoration: ${theme.button.text.decoration[color]};
	text-underline-offset: ${theme.button.text.offset[color]};
	text-decoration-thickness: ${theme.button.text.thickness[color]};

	padding-inline: ${theme.button.spacing.paddingInline[size]};
	line-height: ${theme.input.height[size]};
	height: ${theme.input.height[size]};
`);
