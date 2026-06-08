import {Meta, StoryFn} from '@storybook/react-vite';
import {ProjectTitleBlock} from '@hotcakes/ui-react/ProjectTitleBlock';

const mockProjectInfo: Project.ProjectInfo = {
    id: 1,
    date: '2024-01-15',
    title: 'Brand Identity Design',
    slug: 'brand-identity',
    summary: 'A full brand identity for a SaaS startup.',
    introduction: 'This project involved creating a comprehensive visual identity system including logo design, typography selection, color palette, and brand guidelines.',
    tags: [
        {term_id: 1, name: 'Branding', slug: 'branding', term_group: 0, term_taxonomy_id: 1, taxonomy: 'post_tag', description: '', parent: 0, count: 5, filter: 'raw'},
        {term_id: 2, name: 'Figma', slug: 'figma', term_group: 0, term_taxonomy_id: 2, taxonomy: 'post_tag', description: '', parent: 0, count: 3, filter: 'raw'}
    ],
    categories: [
        {term_id: 10, name: 'Folio', slug: 'folio', term_group: 0, term_taxonomy_id: 10, taxonomy: 'category', description: '', parent: 0, count: 10, filter: 'raw', cat_ID: 10, category_count: 10, category_description: '', cat_name: 'Folio', category_nicename: 'folio', category_parent: 0},
        {term_id: 11, name: 'Project', slug: 'project', term_group: 0, term_taxonomy_id: 11, taxonomy: 'category', description: '', parent: 0, count: 8, filter: 'raw', cat_ID: 11, category_count: 8, category_description: '', cat_name: 'Project', category_nicename: 'project', category_parent: 0}
    ],
    content: {final: [], work: []},
    fonts: {families: [], description: ''},
    palette: {colors: [], description: ''}
};

export default {
    title: 'ProjectTitleBlock'
} satisfies Meta;

export const Primary: StoryFn = () => <ProjectTitleBlock projectInfo={mockProjectInfo} />;
