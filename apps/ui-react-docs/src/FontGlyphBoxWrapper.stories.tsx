import {Meta, StoryFn} from '@storybook/react-vite';
import {FontGlyphBoxWrapper} from '@hotcakes/ui-react/FontGlyphBoxWrapper';

export default {
    title: 'FontGlyphBoxWrapper'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <FontGlyphBoxWrapper {...args}>{'content'}</FontGlyphBoxWrapper>
);
