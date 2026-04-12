import React from 'react';
import { type Preview } from '@storybook/react';
import { ThemeProvider } from '../src/components-new/ThemeProvider';
import "@hotcakes/tokens/lib/tokens.css"

export default {
	parameters: {
		backgrounds: {
			default: 'slate',
			values: [
				{
					name: 'slate',
					value: 'var(--color-gray-100)'
				},
				{
					name: 'dark',
					value: 'var(--color-gray-900)'
				}
			]
		}
	},
	decorators: [
		Story => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		)
	]
} satisfies Preview;
