import {Meta, StoryFn} from '@storybook/react-vite';
import {Typography} from '@hotcakes/ui-react/Typography';

export default {
    title: 'Typography'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Typography {...args}>{'content'}</Typography>
);
