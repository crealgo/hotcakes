import {Meta, StoryFn} from '@storybook/react-vite';
import {HeaderSearch} from '@hotcakes/ui-react/HeaderSearch';

export default {
    title: 'HeaderSearch'
} satisfies Meta;

export const Open: StoryFn = () => (
    <HeaderSearch isOpen onClose={() => {}} />
);

export const Closed: StoryFn = () => (
    <HeaderSearch isOpen={false} onClose={() => {}} />
);
