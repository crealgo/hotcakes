import {Meta, StoryFn} from '@storybook/react-vite';
import {ButtonLink} from '@hotcakes/ui-react/ButtonLink';

export default {
    title: 'ButtonLink'
} satisfies Meta;

export const Variants: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <ButtonLink href={'#'} variant={'contained'}>{'Visit Page'}</ButtonLink>
        <ButtonLink href={'#'} variant={'filled'}>{'Filled Link'}</ButtonLink>
        <ButtonLink href={'#'} variant={'outlined'}>{'Learn More'}</ButtonLink>
        <ButtonLink href={'#'} variant={'text'}>{'Read More'}</ButtonLink>
    </div>
);

export const WithIcon: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <ButtonLink href={'#'} variant={'contained'} icon={'arrow_forward'}>{'Next'}</ButtonLink>
        <ButtonLink href={'#'} variant={'outlined'} icon={'open_in_new'}>{'External Link'}</ButtonLink>
    </div>
);
