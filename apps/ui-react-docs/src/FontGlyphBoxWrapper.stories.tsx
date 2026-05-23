import {Meta, StoryFn} from '@storybook/react-vite';
import {FontGlyphBoxWrapper} from '@hotcakes/ui-react/FontGlyphBoxWrapper';
import {FontGlyphBox} from '@hotcakes/ui-react/FontGlyphBox';

export default {
    title: 'FontGlyphBoxWrapper'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <FontGlyphBoxWrapper>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((char) => (
            <FontGlyphBox key={char} name={'alphabet'} defaultValue={'A'}>
                {char}
            </FontGlyphBox>
        ))}
    </FontGlyphBoxWrapper>
);
