import {Meta, StoryFn} from '@storybook/react-vite';
import {KeyboardSnippet} from '@hotcakes/ui-react/KeyboardSnippet';

export default {
    title: 'KeyboardSnippet'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <KeyboardSnippet {...args}>{'content'}</KeyboardSnippet>
);
