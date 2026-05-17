import {Meta, StoryFn} from '@storybook/react-vite';
import {Dot} from '@hotcakes/ui-react/Dot';

export default {
    title: 'Dot'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Dot {...args}>{'content'}</Dot>
);
