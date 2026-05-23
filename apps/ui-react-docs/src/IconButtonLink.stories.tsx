import {Meta, StoryFn} from '@storybook/react-vite';
import {IconButtonLink} from '@hotcakes/ui-react/IconButtonLink';

export default {
    title: 'IconButtonLink'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem'}}>
        <IconButtonLink href={'#'} icon={'home'} variant={'text'} />
        <IconButtonLink href={'#'} icon={'open_in_new'} variant={'outlined'} />
        <IconButtonLink href={'#'} icon={'favorite'} variant={'contained'} color={'red'} />
        <IconButtonLink href={'#'} icon={'arrow_forward'} variant={'contained'} color={'brand'} />
    </div>
);
