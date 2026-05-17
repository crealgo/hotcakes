import {Meta, StoryFn} from '@storybook/react-vite';
import {HeaderDrawer} from '@hotcakes/ui-react/HeaderDrawer';

export default {
    title: 'HeaderDrawer'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <HeaderDrawer {...args}>{'content'}</HeaderDrawer>
);
