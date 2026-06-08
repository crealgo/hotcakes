import {Meta, StoryFn} from '@storybook/react-vite';
import {HeaderSearch} from '@hotcakes/ui-react/HeaderSearch';

export default {
    title: 'HeaderSearch'
} satisfies Meta;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const Open: StoryFn = () => (
    <HeaderSearch isOpen onClose={noop} />
);

export const Closed: StoryFn = () => (
    <HeaderSearch isOpen={false} onClose={noop} />
);
