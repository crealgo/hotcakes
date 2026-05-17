import {Meta, StoryFn} from '@storybook/react-vite';
import {TitleBox} from '@hotcakes/ui-react/TitleBox';

export default {
    title: 'TitleBox'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <TitleBox {...args}>{'content'}</TitleBox>
);
