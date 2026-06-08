import {Meta, StoryFn} from '@storybook/react-vite';
import {Link} from '@hotcakes/ui-react/Link';

export default {
    title: 'Link'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <Link href={'#'}>{'Default link'}</Link>
        <Link href={'#'} active>{'Active link'}</Link>
        <Link href={'#'} noUnderline>{'No underline'}</Link>
        <Link href={'#'} icon={'arrow_forward'}>{'With icon'}</Link>
    </div>
);
