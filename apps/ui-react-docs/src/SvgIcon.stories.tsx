import {Meta, StoryFn} from '@storybook/react-vite';
import {SvgIcon} from '@hotcakes/ui-react/SvgIcon';

export default {
    title: 'SvgIcon'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <SvgIcon {...args}>{'content'}</SvgIcon>
);
