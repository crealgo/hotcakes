import {Meta, StoryFn} from '@storybook/react-vite';
import {Divider} from '@hotcakes/ui-react/Divider';

export default {
    title: 'Divider'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Divider {...args}>{'content'}</Divider>
);
