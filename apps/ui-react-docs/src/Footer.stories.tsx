import {Meta, StoryFn} from '@storybook/react-vite';
import {Footer} from '@hotcakes/ui-react/Footer';

const socialLinks: Work.SocialLink[] = [
    {title: 'GitHub', slug: 'github', color: 'slate', icon: 'code', url: 'https://github.com'},
    {title: 'LinkedIn', slug: 'linkedin', color: 'blue', icon: 'work', url: 'https://linkedin.com'},
    {title: 'Twitter', slug: 'twitter', color: 'blue', icon: 'tag', url: 'https://twitter.com'}
];

export default {
    title: 'Footer'
} satisfies Meta;

export const Primary: StoryFn = () => <Footer socialLinks={socialLinks} />;
