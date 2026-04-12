import tokens from '@hotcakes/tokens/lib/tokens.json';

enum Breakpoints {
	base = 0,
	xs = '320px',
	sm = '640px',
	md = '960px',
	lg = '1280px',
	xl = '1440px',
	xxl = '1920px',
}

const theme = {
	...tokens,
	breakpoints: {
		up: (key: keyof typeof Breakpoints) => `@media screen and (min-width: ${Breakpoints[key]})`,
		down: (key: keyof typeof Breakpoints) => `@media screen and (max-width: ${Breakpoints[key]})`,
		values: Breakpoints,
	},
} as const;

type HotcakesTheme = typeof theme;

declare module '@emotion/react' {
	export interface Theme extends HotcakesTheme {}
}

export type {HotcakesTheme};

export default theme;
