import {Meta, StoryFn} from '@storybook/react-vite';
import {Mark} from '@hotcakes/ui-react/Mark';

export default {
    title: 'Mark'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Mark {...args}>{'content'}</Mark>
);
