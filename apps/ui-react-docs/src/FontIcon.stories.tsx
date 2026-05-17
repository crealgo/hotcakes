import {Meta, StoryFn} from '@storybook/react-vite';
import {FontIcon} from '@hotcakes/ui-react/FontIcon';

export default {
    title: 'FontIcon'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <FontIcon {...args}>{'content'}</FontIcon>
);
