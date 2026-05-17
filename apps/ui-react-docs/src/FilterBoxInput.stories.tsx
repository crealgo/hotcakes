import {Meta, StoryFn} from '@storybook/react-vite';
import {FilterBoxInput} from '@hotcakes/ui-react/FilterBoxInput';

export default {
    title: 'FilterBoxInput'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <FilterBoxInput {...args}>{'content'}</FilterBoxInput>
);
