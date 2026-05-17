import {Meta, StoryFn} from '@storybook/react-vite';
import {ColorChip} from '@hotcakes/ui-react/ColorChip';

export default {
    title: 'ColorChip'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <ColorChip {...args}>{'content'}</ColorChip>
);
