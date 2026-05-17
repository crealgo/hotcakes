import {Meta, StoryFn} from '@storybook/react-vite';
import {MasonryItem} from '@hotcakes/ui-react/MasonryItem';

export default {
    title: 'MasonryItem'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <MasonryItem {...args}>{'content'}</MasonryItem>
);
