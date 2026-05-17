import {Meta, StoryFn} from '@storybook/react-vite';
import {Header} from '@hotcakes/ui-react/Header';

export default {
    title: 'Header'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Header {...args}>{'content'}</Header>
);
