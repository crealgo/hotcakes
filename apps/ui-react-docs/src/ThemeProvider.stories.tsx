import {Meta, StoryFn} from '@storybook/react-vite';
import {ThemeProvider} from '@hotcakes/ui-react/ThemeProvider';

export default {
    title: 'ThemeProvider'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <ThemeProvider {...args}>{'content'}</ThemeProvider>
);
