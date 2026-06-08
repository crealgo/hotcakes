import {Meta, StoryFn} from '@storybook/react-vite';
import {ProjectCard} from '@hotcakes/ui-react/ProjectCard';

const mockProject: Work.Project = {
    id: 1,
    title: 'Design System',
    slug: 'design-system',
    introduction: 'A comprehensive design system built for scalability.',
    date: '2024-01-15',
    modified: '2024-02-01',
    image: {
        url: 'https://picsum.photos/600/600?random=10',
        name: 'Design System preview',
        sizes: {
            thumbnail: 'https://picsum.photos/150/150?random=10',
            'thumbnail-width': 150,
            'thumbnail-height': 150,
            medium: 'https://picsum.photos/300/300?random=10',
            'medium-width': 300,
            'medium-height': 300,
            medium_large: 'https://picsum.photos/600/600?random=10',
            'medium_large-width': 600,
            'medium_large-height': 600,
            large: 'https://picsum.photos/1024/1024?random=10',
            'large-width': 1024,
            'large-height': 1024,
            '1536x1536': 'https://picsum.photos/1536/1536?random=10',
            '1536x1536-width': 1536,
            '1536x1536-height': 1536,
            '2048x2048': 'https://picsum.photos/2048/2048?random=10',
            '2048x2048-width': 2048,
            '2048x2048-height': 2048,
            indexp: 'https://picsum.photos/600/600?random=10',
            'indexp-width': 600,
            'indexp-height': 600,
            indexl: 'https://picsum.photos/800/600?random=10',
            'indexl-width': 800,
            'indexl-height': 600,
            related: 'https://picsum.photos/400/300?random=10',
            'related-width': 400,
            'related-height': 300
        }
    },
    tags: [
        {term_id: 1, name: 'UI Design', slug: 'ui-design', term_group: 0, term_taxonomy_id: 1, taxonomy: 'post_tag', description: '', parent: 0, count: 5, filter: 'raw'},
        {term_id: 2, name: 'React', slug: 'react', term_group: 0, term_taxonomy_id: 2, taxonomy: 'post_tag', description: '', parent: 0, count: 3, filter: 'raw'}
    ],
    categories: []
};

export default {
    title: 'ProjectCard'
} satisfies Meta;

export const Vertical: StoryFn = () => (
    <div style={{maxWidth: '320px'}}>
        <ProjectCard project={mockProject} orientation={'vertical'} />
    </div>
);

export const Horizontal: StoryFn = () => (
    <div style={{maxWidth: '600px'}}>
        <ProjectCard project={mockProject} orientation={'horizontal'} />
    </div>
);
