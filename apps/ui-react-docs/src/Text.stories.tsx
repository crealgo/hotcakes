import {Meta, StoryFn} from '@storybook/react-vite';
import {Text} from '@hotcakes/ui-react/Text';

export default {
    title: 'Text'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Text {...args}>{'content'}</Text>
);
