import {existsSync, rmSync} from 'fs';
import {glob} from 'glob';
import process from 'process';
import * as StyleDictionary from 'style-dictionary';
import {scaleColor} from '../src/utils/color';
import {formatTokens} from '../src/utils/format-tokens';

const tokenDir = `${process.cwd()}/src/tokens/`;
const distDir = `${process.cwd()}/lib/`;

const buildTokens = async () => {
	const filePaths = await glob(`${tokenDir}/**/*.ts`, {
		nodir: true,
		ignore: [`${tokenDir}/**/*.d.ts`],
		noext: true,
	});

	let rawTokens: RawTokenObject = {};

	for await (const filePath of filePaths) {
		const newTokens = (await import(filePath)).default as RawTokenObject;
		rawTokens = {...rawTokens, ...newTokens};
	}

	const tokens = formatTokens(rawTokens);

	if (existsSync(distDir)) {
		rmSync(distDir, {recursive: true});
	}

	// StyleDictionary.registerParser({
	// 	pattern: /\.ts/g,
	// 	parse: ({contents}) => {
	// 		// const tokens = (eval(contents) as RawTokenObject).default;
	// 		console.log(contents);
	// 		return JSON.parse(contents)
	// 	},
	// });

	StyleDictionary.registerTransform({
		name: 'color/scale',
		type: 'value',
		transitive: true,
		matcher(token) {
			const tester = /main|darkest|darker|dark|neutral|light|lighter|lightest|contrast/g;
			return tester.test(token.name);
		},
		transformer: token => {
			// console.log(token)
			return scaleColor(token.value as string, token.name as ColorShade);
		}
	});

	const client = StyleDictionary.extend({
		tokens,
		platforms: {
			css: {
				buildPath: 'lib/',
				transforms: [
					'color/scale',
					'attribute/cti',
					'name/cti/kebab',
					'time/seconds',
					'content/icon',
					'size/rem',
					'color/css',
				],
				files: [
					{
						destination: 'tokens.css',
						format: 'css/variables',
					},
					{
						destination: 'tokens.scss',
						format: 'scss/variables',
					},
				],
			},
			js: {
				transforms: [
					'color/scale',
					'attribute/cti',
					'name/cti/pascal',
					'size/rem',
					'color/hex',
				],
				buildPath: 'lib/',
				files: [
					{
						destination: 'tokens.json',
						format: 'json/nested',
					},
				],
			},
		},
	});

	client.buildAllPlatforms();
};

void buildTokens();
