import {Meta, StoryFn} from '@storybook/react-vite';
import {FilterRadioGroup} from '@hotcakes/ui-react/FilterRadioGroup';

export default {
    title: 'FilterRadioGroup'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <FilterRadioGroup {...args}>{'content'}</FilterRadioGroup>
);
