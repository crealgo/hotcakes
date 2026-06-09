declare type RawToken = string | number;

declare type RawTokenObject = {
	[key: string]: RawToken | RawTokenObject;
};

declare type FormattedToken = {
	value: string | number;
};

declare type FormattedTokenObject = {
	[key: string]: FormattedToken | FormattedTokenObject;
};

declare type ColorShade = 'main' | 'lightest' | 'lighter' | 'light' | 'neutral' | 'dark' | 'darker' | 'darkest' | 'contrast';
