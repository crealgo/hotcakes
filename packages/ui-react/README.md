# @hotcakes/ui-react

Reusable React component library built with styled-components and Tailwind CSS, designed for use in Next.js and standard React projects.

## Installation

```bash
npm install @hotcakes/ui-react
# or
pnpm add @hotcakes/ui-react
```

## Setup

Import the stylesheet in your app's root:

```ts
import '@hotcakes/ui-react/index.css';
```

Wrap your app with the `ThemeProvider`:

```tsx
import {ThemeProvider} from '@hotcakes/ui-react';

export default function App({children}) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
```

## Usage

### Components

```tsx
import {Button, IconButton, Tag, Text, Stack} from '@hotcakes/ui-react';

export default function Page() {
    return (
        <Stack>
            <Text>Hello world</Text>
            <Button>Click me</Button>
            <Tag>New</Tag>
        </Stack>
    );
}
```

### Utilities

```ts
import {createTheme} from '@hotcakes/ui-react/utils/createTheme';

const theme = createTheme();
// theme.color, theme.breakpoint, theme.shadow, theme.spacing
```

### Hooks

```ts
import {useWindowSize} from '@hotcakes/ui-react/hooks/useWindowSize';

function Component() {
    const {width, isMd, isLg} = useWindowSize();
}
```

## Peer Dependencies

```json
{
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^4.3.0",
    "next": "^14.2.35"
}
```

## License

MIT
