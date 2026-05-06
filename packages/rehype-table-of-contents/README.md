# @hotcakes/rehype-table-of-contents

A [rehype](https://github.com/rehypejs/rehype) plugin for MDX that:

1. Collects all `h1`–`h3` headings from your content
2. Converts each heading into an anchor link (e.g. `<a href="#my-heading">`)
3. Injects a `tableOfContents` array into the MDX frontmatter export

## Installation

```sh
npm install @hotcakes/rehype-table-of-contents
# or
pnpm add @hotcakes/rehype-table-of-contents
```

## Usage

Add the plugin to your rehype pipeline. For example, in a Next.js project using `@next/mdx`:

```js
// next.config.mjs
import createMDX from '@next/mdx';
import rehypeTableOfContents from '@hotcakes/rehype-table-of-contents';

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeTableOfContents],
  },
});

export default withMDX({ /* ...next config */ });
```

### Prerequisites

Your MDX files must use `remark-frontmatter` and `remark-mdx-frontmatter` so that frontmatter is parsed and exported as an ES module. The plugin reads and mutates the resulting `ExportNamedDeclaration` node in the AST.

```js
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeTableOfContents from '@hotcakes/rehype-table-of-contents';

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeTableOfContents],
  },
});
```

## What it does

Given an MDX file like:

```mdx
---
title: My Article
---

## Introduction

Some content here.

## Getting Started

More content here.
```

After processing, the plugin will:

- Add `id` attributes and anchor wrappers to each heading:
  ```html
  <h2 id="introduction"><a href="#introduction">Introduction</a></h2>
  <h2 id="getting-started"><a href="#getting-started">Getting Started</a></h2>
  ```

- Inject a `tableOfContents` property into the frontmatter export:
  ```js
  export const frontmatter = {
    title: 'My Article',
    tableOfContents: [
      { title: 'Introduction', id: 'introduction' },
      { title: 'Getting Started', id: 'getting-started' },
    ],
  };
  ```

You can then consume `tableOfContents` in your layout or page component:

```tsx
export default function ArticleLayout({ children, frontmatter }) {
  return (
    <div>
      <nav>
        {frontmatter.tableOfContents.map(({ title, id }) => (
          <a key={id} href={`#${id}`}>{title}</a>
        ))}
      </nav>
      <article>{children}</article>
    </div>
  );
}
```

## Heading support

Only `h1`, `h2`, and `h3` headings are processed. Deeper headings (`h4`–`h6`) are left unchanged.

Heading slugs are generated using [kebab-case](https://github.com/blakeembrey/change-case) from the heading text content.

## License

MIT © [Crealgo, LLC](https://crealgo.com)
