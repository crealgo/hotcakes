import {Meta, StoryFn} from '@storybook/react-vite';
import {FilterRadio} from '@hotcakes/ui-react/FilterRadio';

export default {
    title: 'FilterRadio'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <FilterRadio {...args}>{'content'}</FilterRadio>
);
