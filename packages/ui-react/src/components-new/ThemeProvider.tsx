import {ThemeProvider as Provider, type ThemeProviderProps as Props} from '@emotion/react';
import {type FC, type PropsWithChildren} from 'react';
import theme from '@configs/theme';
import '../styles/index.scss';

type ThemeProviderProps = PropsWithChildren<Props>;

export const ThemeProvider: FC<Partial<ThemeProviderProps>> = props => (
	<Provider theme={theme}>
		{props.children}
	</Provider>
);
