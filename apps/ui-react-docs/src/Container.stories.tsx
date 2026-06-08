import {Meta, StoryFn} from '@storybook/react-vite';
import {Container} from '@hotcakes/ui-react/Container';
import {Typography} from '@hotcakes/ui-react/Typography';

export default {
    title: 'Container'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{backgroundColor: '#f1f5f9'}}>
        <Container style={{backgroundColor: 'white', padding: '1rem'}}>
            <Typography variant={'body1'}>{'Container constrains content to max-width xl (1280px) with auto horizontal margins.'}</Typography>
        </Container>
    </div>
);
