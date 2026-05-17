import {Meta, StoryFn} from '@storybook/react-vite';
import {ScrollableGallery} from '@hotcakes/ui-react/ScrollableGallery';

export default {
    title: 'ScrollableGallery'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <ScrollableGallery {...args}>{'content'}</ScrollableGallery>
);
