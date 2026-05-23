import {Meta, StoryFn} from '@storybook/react-vite';
import {MDXContent} from '@hotcakes/ui-react/MDXContent';

export default {
    title: 'MDXContent'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <MDXContent>
        <h1>{'Article Title'}</h1>
        <p>{'Introduction paragraph demonstrating how MDXContent styles prose content.'}</p>
        <h2>{'Section Heading'}</h2>
        <p>
            {'Body text with '}
            <strong>{'bold'}</strong>
            {' and '}
            <em>{'italic'}</em>
            {' formatting.'}
        </p>
        <ul>
            <li>{'First list item'}</li>
            <li>{'Second list item'}</li>
            <li>{'Third list item'}</li>
        </ul>
        <blockquote>{'A blockquote element styled with brand colors and a left border.'}</blockquote>
    </MDXContent>
);
