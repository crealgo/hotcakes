import {Meta, StoryFn} from '@storybook/react-vite';
import {StyledComponentsRegistry} from '@hotcakes/ui-react/StyledComponentsRegistry';

export default {
    title: 'StyledComponentsRegistry'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <StyledComponentsRegistry {...args}>{'content'}</StyledComponentsRegistry>
);
