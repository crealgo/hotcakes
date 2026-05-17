import {Meta, StoryFn} from '@storybook/react-vite';
import {Stack} from '@hotcakes/ui-react/Stack';

export default {
    title: 'Stack'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Stack {...args}>{'content'}</Stack>
);
