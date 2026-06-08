import {Meta, StoryFn} from '@storybook/react-vite';
import {SkipLink} from '@hotcakes/ui-react/SkipLink';

export default {
    title: 'SkipLink'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div>
        <p style={{marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b'}}>
            {'Tab into the frame to see the skip link appear:'}
        </p>
        <SkipLink href={'#main-content'}>{'Skip to main content'}</SkipLink>
    </div>
);
