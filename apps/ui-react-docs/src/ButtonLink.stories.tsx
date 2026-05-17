import {Meta, StoryFn} from '@storybook/react-vite';
import {ButtonLink} from '@hotcakes/ui-react/ButtonLink';

export default {
    title: 'ButtonLink'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <ButtonLink {...args}>{'content'}</ButtonLink>
);
