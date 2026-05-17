import {Meta, StoryFn} from '@storybook/react-vite';
import {Image} from '@hotcakes/ui-react/Image';

export default {
    title: 'Image'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Image {...args}>{'content'}</Image>
);
