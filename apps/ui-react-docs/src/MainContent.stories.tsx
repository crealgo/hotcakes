import {Meta, StoryFn} from '@storybook/react-vite';
import {MainContent} from '@hotcakes/ui-react/MainContent';
import {Typography} from '@hotcakes/ui-react/Typography';

export default {
    title: 'MainContent'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <MainContent>
        <Typography variant={'body1'}>{'Semantic main element for the page body.'}</Typography>
    </MainContent>
);
