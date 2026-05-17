import {Meta, StoryFn} from '@storybook/react-vite';
import {FontGlyphBox} from '@hotcakes/ui-react/FontGlyphBox';

export default {
    title: 'FontGlyphBox'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <FontGlyphBox {...args}>{'content'}</FontGlyphBox>
);
