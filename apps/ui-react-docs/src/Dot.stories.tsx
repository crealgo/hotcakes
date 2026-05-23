import {Meta, StoryFn} from '@storybook/react-vite';
import {Dot} from '@hotcakes/ui-react/Dot';

export default {
    title: 'Dot'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <p>
        {'Separate'} <Dot /> {'these'} <Dot /> {'words'}
    </p>
);
