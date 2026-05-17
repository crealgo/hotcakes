import {Meta, StoryFn} from '@storybook/react-vite';
import {LightBox} from '@hotcakes/ui-react/LightBox';

export default {
    title: 'LightBox'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <LightBox {...args}>{'content'}</LightBox>
);
