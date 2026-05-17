import {Meta, StoryFn} from '@storybook/react-vite';
import {Button} from '@hotcakes/ui-react/Button';

export default {
    title: 'Button'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Button {...args}>{'content'}</Button>
);
