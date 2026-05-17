import {Meta, StoryFn} from '@storybook/react-vite';
import {Content} from '@hotcakes/ui-react/Content';

export default {
    title: 'Content'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Content {...args}>{'content'}</Content>
);
