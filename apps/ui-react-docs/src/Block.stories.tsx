import {Meta, StoryFn} from '@storybook/react-vite';
import {Block} from '@hotcakes/ui-react/Block';

export default {
    title: 'Block'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Block {...args}>{'content'}</Block>
);
