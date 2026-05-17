import {Meta, StoryFn} from '@storybook/react-vite';
import {SubtitleBox} from '@hotcakes/ui-react/SubtitleBox';

export default {
    title: 'SubtitleBox'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <SubtitleBox {...args}>{'content'}</SubtitleBox>
);
