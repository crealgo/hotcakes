import {Meta, StoryFn} from '@storybook/react-vite';
import {HelperText} from '@hotcakes/ui-react/HelperText';

export default {
    title: 'HelperText'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <HelperText {...args}>{'content'}</HelperText>
);
