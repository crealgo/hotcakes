import {existsSync, rmSync} from 'node:fs';
import StyleDictionary from 'style-dictionary';
import {scaleColor} from '../__utils__/color.js';
import {formatTokens} from '../__utils__/format-tokens.js';
import base from '../tokens/base.js';
import block from '../tokens/block.js';
import components from '../tokens/components.js';
import foundations from '../tokens/foundations.js';
import utils from '../tokens/utils.js';

const distDir = `${process.cwd()}/lib/`;

const buildTokens = async () => {
    const rawTokens = {...base, ...block, ...components, ...foundations, ...utils};
    const tokens = formatTokens(rawTokens);

    if (existsSync(distDir)) {
        rmSync(distDir, {recursive: true});
    }

    const sd = new StyleDictionary({
        tokens,
        hooks: {
            transforms: {
                'color/scale': {
                    type: 'value',
                    transitive: true,
                    filter: token => /main|darkest|darker|dark|neutral|light|lighter|lightest|contrast/.test(token.name),
                    transform: token => scaleColor(String(token.value), token.name),
                },
            },
        },
        platforms: {
            css: {
                buildPath: 'lib/',
                transforms: ['color/scale', 'attribute/cti', 'name/kebab', 'time/seconds', 'html/icon', 'size/rem', 'color/css'],
                files: [
                    {destination: 'tokens.css', format: 'css/variables'},
                    {destination: 'tokens.scss', format: 'scss/variables'},
                ],
            },
            js: {
                buildPath: 'lib/',
                transforms: ['color/scale', 'attribute/cti', 'name/pascal', 'size/rem', 'color/hex'],
                files: [
                    {destination: 'tokens.json', format: 'json/nested'},
                ],
            },
        },
    });

    await sd.buildAllPlatforms();
};

void buildTokens();
