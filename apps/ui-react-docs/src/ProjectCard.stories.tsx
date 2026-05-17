import {Meta, StoryFn} from '@storybook/react-vite';
import {ProjectCard} from '@hotcakes/ui-react/ProjectCard';

export default {
    title: 'ProjectCard'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <ProjectCard {...args}>{'content'}</ProjectCard>
);
