import {type Theme, type CSSObject} from '@emotion/react';
import {type ButtonProps} from '@components/Button';

export type ButtonStyledFuncProps = ButtonProps & {
	theme: Theme;
};

export type ButtonStyledFunc = (
	props: ButtonStyledFuncProps
) => string | CSSObject;

export const getButtonColors: ButtonStyledFunc = ({
	theme, color = 'text',
}) => ({
	primary: theme.color.brand.primary.main,
	secondary: theme.color.brand.secondary.main,
	tertiary: theme.color.white,
	text: 'transparent',
}[color]);

export const getButtonTextColors: ButtonStyledFunc = ({
	theme,
	color = 'text',
}) => ({
	primary: theme.color.brand.primary.contrast,
	secondary: theme.color.brand.secondary.contrast,
	tertiary: theme.color.gray[900],
	text: theme.color.gray[900],
}[color]);

export const getButtonHoverColors: ButtonStyledFunc = ({
	theme,
	color = 'text',
}) => ({
	primary: theme.color.brand.primary.dark,
	secondary: theme.color.brand.secondary.dark,
	tertiary: theme.color.white,
	text: theme.color.white,
}[color]);

export const getButtonSizes: ButtonStyledFunc = ({
	size = 'medium',
}) => ({
	small: {
		height: '2.125rem',
		fontSize: '0.875rem',
		padding: '0px 0.875rem',
	},
	medium: {
		height: '2.5rem',
		fontSize: '1rem',
		padding: '0px 1rem',
	},
	large: {
		height: '2.875rem',
		fontSize: '1.125rem',
		padding: '0px 1.125rem',
	},
}[size]);
