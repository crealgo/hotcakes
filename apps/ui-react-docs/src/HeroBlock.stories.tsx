import {Meta, StoryFn} from '@storybook/react-vite';
import {HeroBlock} from '@hotcakes/ui-react/HeroBlock';

const mainLinks: Work.MainLink[] = [
    {id: 1, title: 'Work', slug: 'work', color: 'brand', icon: 'work', status: 'active', url: '/work', data_action: ''},
    {id: 2, title: 'About', slug: 'about', color: 'brand', icon: 'person', status: 'active', url: '/about', data_action: ''},
    {id: 3, title: 'Blog', slug: 'blog', color: 'brand', icon: 'article', status: 'active', url: '/blog', data_action: ''}
];

export default {
    title: 'HeroBlock'
} satisfies Meta;

export const Primary: StoryFn = () => <HeroBlock mainLinks={mainLinks} />;
