import {Meta, StoryFn} from '@storybook/react-vite';
import {Header} from '@hotcakes/ui-react/Header';

const mainLinks: Work.MainLink[] = [
    {id: 1, title: 'Work', slug: 'work', color: 'brand', icon: 'work', status: 'active', url: '/work', data_action: ''},
    {id: 2, title: 'About', slug: 'about', color: 'brand', icon: 'person', status: 'active', url: '/about', data_action: ''},
    {id: 3, title: 'Blog', slug: 'blog', color: 'brand', icon: 'article', status: 'active', url: '/blog', data_action: ''}
];

const socialLinks: Work.SocialLink[] = [
    {title: 'GitHub', slug: 'github', color: 'slate', icon: 'code', url: 'https://github.com'},
    {title: 'LinkedIn', slug: 'linkedin', color: 'blue', icon: 'work', url: 'https://linkedin.com'}
];

export default {
    title: 'Header'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <Header mainLinks={mainLinks} socialLinks={socialLinks} />
);
