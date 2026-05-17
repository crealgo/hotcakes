import {Meta, StoryFn} from '@storybook/react-vite';
import {Container} from '@hotcakes/ui-react/Container';

export default {
    title: 'Container'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Container {...args}>{'content'}</Container>
);
