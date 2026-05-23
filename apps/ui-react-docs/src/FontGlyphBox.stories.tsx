import {Meta, StoryFn} from '@storybook/react-vite';
import {FontGlyphBox} from '@hotcakes/ui-react/FontGlyphBox';

export default {
    title: 'FontGlyphBox'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        {'ABCDEFGHIJ'.split('').map((char) => (
            <FontGlyphBox key={char} name={'glyph-demo'} defaultValue={'A'}>
                {char}
            </FontGlyphBox>
        ))}
    </div>
);
