import {Meta, StoryFn} from '@storybook/react-vite';
import {MainContent} from '@hotcakes/ui-react/MainContent';

export default {
    title: 'MainContent'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <MainContent {...args}>{'content'}</MainContent>
);
