import {describe, expect, it} from 'vitest';
import type * as hast from 'hast';
import rehypeTableOfContents from '../../src/transformer.js';

const sampleHast = {
    type: 'root',
    children: []
} satisfies hast.Root;

describe('the rehype plugin, given an ast with headings', () => {
	it('should return an ast with a table of contents and anchored headers', async () => {
		rehypeTableOfContents(sampleHast);

		expect(sampleHast).toMatchSnapshot();
	});
});
