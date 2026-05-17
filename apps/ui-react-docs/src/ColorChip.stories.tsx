import {Meta, StoryFn} from '@storybook/react-vite';
import {ColorChip} from '@hotcakes/ui-react/ColorChip';

export default {
    title: 'ColorChip',
    args: {
        color: {
            name: 'Blue',
            hex: '#0000FF'
        }
    }
} satisfies Meta<typeof ColorChip>;

export const Primary: StoryFn<typeof ColorChip> = (args) => (
    <ColorChip {...args}>{'content'}</ColorChip>
);
