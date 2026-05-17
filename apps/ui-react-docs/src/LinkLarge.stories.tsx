import {Meta, StoryFn} from '@storybook/react-vite';
import {LinkLarge} from '@hotcakes/ui-react/LinkLarge';

export default {
    title: 'LinkLarge'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <LinkLarge {...args}>{'content'}</LinkLarge>
);
