import {Meta, StoryFn} from '@storybook/react-vite';
import {IconButton} from '@hotcakes/ui-react/IconButton';

export default {
    title: 'IconButton'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <IconButton {...args}>{'content'}</IconButton>
);
