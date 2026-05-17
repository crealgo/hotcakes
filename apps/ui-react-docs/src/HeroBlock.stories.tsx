import {Meta, StoryFn} from '@storybook/react-vite';
import {HeroBlock} from '@hotcakes/ui-react/HeroBlock';

export default {
    title: 'HeroBlock'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <HeroBlock {...args}>{'content'}</HeroBlock>
);
