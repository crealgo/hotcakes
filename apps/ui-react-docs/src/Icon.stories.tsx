import {Meta, StoryFn} from '@storybook/react-vite';
import {Icon} from '@hotcakes/ui-react/Icon';

export default {
    title: 'Icon'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Icon {...args}>{'content'}</Icon>
);
