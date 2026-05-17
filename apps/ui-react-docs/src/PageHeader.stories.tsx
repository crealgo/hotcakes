import {Meta, StoryFn} from '@storybook/react-vite';
import {PageHeader} from '@hotcakes/ui-react/PageHeader';

export default {
    title: 'PageHeader'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <PageHeader {...args}>{'content'}</PageHeader>
);
