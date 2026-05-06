'use client';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createTheme } from './utils/createTheme.js';

const defaultTheme = createTheme();

declare module 'styled-components' {
    type CustomTheme = typeof defaultTheme;

    export interface DefaultTheme extends CustomTheme {
        _test?: string;
    }
}

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => (
    <StyledThemeProvider theme={defaultTheme}>
        {props.children}
    </StyledThemeProvider>
);
