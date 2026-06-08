import {Meta, StoryFn} from '@storybook/react-vite';
import {PageHeader} from '@hotcakes/ui-react/PageHeader';

export default {
    title: 'PageHeader'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <PageHeader
        title={'Work'}
        subtitle={'Selected Projects'}
        description={'A curated collection of design systems, brand identity, and digital products.'}
    />
);

export const WithImage: StoryFn = () => (
    <PageHeader
        title={'Brand Identity'}
        subtitle={'2024 Project'}
        description={'Full brand identity design including logo, typography, color system, and motion guidelines.'}
        ImageProps={{
            src: 'https://picsum.photos/600/400?random=50',
            alt: 'Project preview',
            aspectRatio: '3/2',
            width: '100%'
        }}
    />
);
