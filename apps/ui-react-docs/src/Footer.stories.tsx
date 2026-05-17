import {Meta, StoryFn} from '@storybook/react-vite';
import {Footer} from '@hotcakes/ui-react/Footer';

export default {
    title: 'Footer'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Footer {...args}>{'content'}</Footer>
);
