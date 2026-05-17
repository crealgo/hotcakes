import {Meta, StoryFn} from '@storybook/react-vite';
import {SkipLink} from '@hotcakes/ui-react/SkipLink';

export default {
    title: 'SkipLink'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <SkipLink {...args}>{'content'}</SkipLink>
);
