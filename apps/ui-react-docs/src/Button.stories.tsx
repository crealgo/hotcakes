import { Meta, StoryFn } from '@storybook/react-vite';
import { Button } from '@hotcakes/ui-react/Button'


const meta = {
    title: 'Button'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Button {...args}>{'This is a button'}</Button>
);

export default meta;