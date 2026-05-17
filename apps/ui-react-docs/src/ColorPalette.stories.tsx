import {Meta, StoryFn} from '@storybook/react-vite';
import {ColorPalette} from '@hotcakes/ui-react/ColorPalette';

export default {
    title: 'ColorPalette'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <ColorPalette {...args}>{'content'}</ColorPalette>
);
