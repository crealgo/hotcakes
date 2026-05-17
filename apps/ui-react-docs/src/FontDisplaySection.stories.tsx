import {Meta, StoryFn} from '@storybook/react-vite';
import {FontDisplaySection} from '@hotcakes/ui-react/FontDisplaySection';

export default {
    title: 'FontDisplaySection'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <FontDisplaySection {...args}>{'content'}</FontDisplaySection>
);
