import { type StorybookConfig } from '@storybook/react-vite';

export default {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	framework: '@storybook/react-vite',
	docs: {
		autodocs: 'tag'
	}
} satisfies StorybookConfig;
