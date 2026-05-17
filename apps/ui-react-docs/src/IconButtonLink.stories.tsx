import {Meta, StoryFn} from '@storybook/react-vite';
import {IconButtonLink} from '@hotcakes/ui-react/IconButtonLink';

export default {
    title: 'IconButtonLink'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <IconButtonLink {...args}>{'content'}</IconButtonLink>
);
