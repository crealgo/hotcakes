import {Meta, StoryFn} from '@storybook/react-vite';
import {HeaderSearch} from '@hotcakes/ui-react/HeaderSearch';

export default {
    title: 'HeaderSearch'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <HeaderSearch {...args}>{'content'}</HeaderSearch>
);
