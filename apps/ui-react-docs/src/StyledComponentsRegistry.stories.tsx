import {Meta, StoryFn} from '@storybook/react-vite';
import StyledComponentsRegistry from '@hotcakes/ui-react/StyledComponentsRegistry';
import {Typography} from '@hotcakes/ui-react/Typography';

export default {
    title: 'StyledComponentsRegistry'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <StyledComponentsRegistry>
        <Typography variant={'body1'}>{'SSR registry — in browser, renders children directly.'}</Typography>
    </StyledComponentsRegistry>
);
