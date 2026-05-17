import {Meta, StoryFn} from '@storybook/react-vite';
import {Masonry} from '@hotcakes/ui-react/Masonry';

export default {
    title: 'Masonry'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Masonry {...args}>{'content'}</Masonry>
);
