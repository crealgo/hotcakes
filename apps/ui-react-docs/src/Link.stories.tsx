import {Meta, StoryFn} from '@storybook/react-vite';
import {Link} from '@hotcakes/ui-react/Link';

export default {
    title: 'Link'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <Link {...args}>{'content'}</Link>
);
