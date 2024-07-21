module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["xo", "xo-react", "xo-typescript"],
	rules: {
		"no-alert": "off",
		"capitalized-comments": "off",
		"react/boolean-prop-naming": "off",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/function-component-definition": "off",
		"react/jsx-no-constructed-context-values": "off",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/ban-types": "off",
		"react/no-unescaped-entities": "off",
		"react/require-default-props": "off",
		"@typescript-eslint/no-require-imports": "off",
		"@typescript-eslint/no-var-requires": "off",
	},
	ignorePatterns: ["node_modules", "dist"],
};
