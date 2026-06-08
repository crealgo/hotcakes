import {Meta, StoryFn} from '@storybook/react-vite';
import {LoadingDots} from '@hotcakes/ui-react/LoadingDots';

export default {
    title: 'LoadingDots'
} satisfies Meta;

export const Primary: StoryFn = () => <LoadingDots />;
