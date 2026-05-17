import {Meta, StoryFn} from '@storybook/react-vite';
import {Tag} from '@hotcakes/ui-react/Tag';

export default {
    title: 'Tag'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Tag {...args}>{'content'}</Tag>
);
