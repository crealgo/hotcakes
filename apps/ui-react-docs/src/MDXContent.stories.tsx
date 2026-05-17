import {Meta, StoryFn} from '@storybook/react-vite';
import {MDXContent} from '@hotcakes/ui-react/MDXContent';

export default {
    title: 'MDXContent'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <MDXContent {...args}>{'content'}</MDXContent>
);
