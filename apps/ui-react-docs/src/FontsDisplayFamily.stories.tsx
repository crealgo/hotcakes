import {Meta, StoryFn} from '@storybook/react-vite';
import {FontsDisplayFamily} from '@hotcakes/ui-react/FontsDisplayFamily';

export default {
    title: 'FontsDisplayFamily'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <FontsDisplayFamily {...args}>{'content'}</FontsDisplayFamily>
);
