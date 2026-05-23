# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

**Hotcakes** is an Nx monorepo containing reusable UI components and development tools. It's organized as a pnpm workspace with independent package releases using semantic versioning and conventional commits.

### Monorepo Structure

- **Build System**: Nx 22.7.1 with TypeScript project references (composite tsconfig)
- **Package Manager**: pnpm 11.1.2
- **Language**: TypeScript 5.9.3 (ESM modules)

### Workspace Layout

```
apps/
  ui-react-docs/          # Storybook documentation site for ui-react components
packages/
  ui-react/              # React component library (styled-components + Tailwind CSS)
  rehype-table-of-contents/ # MDX/Rehype plugin for auto-generating table of contents
  eslint-config/         # Shared ESLint configuration
```

## Key Commands

### Building

```bash
# Build all TypeScript projects
pnpm nx build

# Build with force (clean rebuild)
pnpm nx build --configuration=force

# Build CSS assets for ui-react (Tailwind compilation)
pnpm nx build-css ui-react
```

### Development

```bash
# Watch TypeScript compilation for all projects
pnpm nx dev

# Start Storybook for ui-react documentation/component development
pnpm nx dev ui-react-docs
```

### Linting & Code Quality

```bash
# Lint entire workspace
pnpm eslint .

# Type-check TypeScript
pnpm tsc --build
```

### Testing

The workspace uses **Vitest** with browser testing via Playwright:

```bash
# Run tests for ui-react-docs (Storybook stories as tests)
pnpm nx test ui-react-docs

# Tests use @storybook/addon-vitest to validate stories via browser testing
# Config: apps/ui-react-docs/vitest.config.ts
```

## Architecture Patterns

### TypeScript Configuration

The workspace uses composite TypeScript builds with path mappings. Key files:
- `tsconfig.base.json` - Shared compiler options (strict mode, ESNext target, declaration/sourceMaps enabled)
- `tsconfig.json` - Project references linking to packages/*/tsconfig.json
- Each package has its own `tsconfig.json` with `composite: true` and `rootDir: ./src`

### Build Process

- **ui-react-docs** (Storybook app):
  - Vite-based with @tailwindcss/vite plugin
  - Stories discovery pattern: `src/**/*.@(story|stories).tsx`
  - Test runner: Vitest with browser plugin (Playwright/Chromium)

- **ui-react** (Component library):
  - Two-step build: TypeScript + Tailwind CSS compilation
  - Exports CSS from `./index.css` and components from root + subpaths (`utils/*`, `hooks/*`)
  - Depends on styled-components (runtime) and Tailwind (peer dependency)

- **rehype-table-of-contents** (MDX plugin):
  - Node.js library (no browser/CSS dependencies)
  - Transforms heading elements and injects tableOfContents into MDX frontmatter
  - AST manipulation using hast and unified ecosystem

- **eslint-config** (Shared tooling):
  - Flat ESLint config (v9 format) with TypeScript support
  - Customizations: 4-space indent, single quotes, arrow parens, jsx formatting
  - Excludes lib/, dist/, out/, node_modules/

### Nx Targets and Dependencies

- `hotcakes-core` (root project): Has implicit dependency on `ui-react` (ensures CSS builds before TypeScript)
- Root `project.json`: `build` target depends on `^build-css` (parent deps must build CSS first)
- Each package defines its own targets in `project.json`

## Development Workflow

### Adding a New Component to ui-react

1. Create `.tsx` file in `packages/ui-react/src/`
2. Export from `packages/ui-react/src/index.ts` if it's a top-level component
3. Add story file in `apps/ui-react-docs/src/ComponentName.stories.tsx` (pattern: `export const Primary: StoryFn`)
4. Run `pnpm nx dev ui-react-docs` to preview in Storybook

### Using Components from ui-react

The library exports:
- Root components: `import { Button } from '@hotcakes/ui-react'`
- Utilities: `import { createTheme } from '@hotcakes/ui-react/utils'`
- Hooks: `import { useWindowSize } from '@hotcakes/ui-react/hooks'`
- Styles: `import '@hotcakes/ui-react/index.css'`

### Releasing Packages

The workspace uses Nx release with conventional commits:
- Commit messages format: `type(scope): description` (e.g., `feat(ui-react): add Button component`)
- Types: `feat`, `fix`, `docs`, `chore`, `refactor`, etc.
- Release command: `pnpm nx release` (handled by CI/CD)
- Each package in `packages/` is released independently with semantic versioning

## Code Style

- **ESLint**: Flat config from @hotcakes/eslint-config
- **Formatting**: 4-space indent (JS/TS), 2-space (YAML), single quotes, semicolons
- **TypeScript**: Strict mode, no unused locals/parameters, full type annotations
- **React Patterns**: Functional components with TypeScript, `'use client'` directive for client-side components (Next.js compatibility)

## Editor Configuration

- `.editorconfig` enforces 2-space indent for most files, 4-space for JS/TS/JSX/TSX
- Root `.vscode/` folder available for editor settings

## Notes

- The workspace uses **pnpm workspaces** with a `catalog:` version directive for shared dependencies (React 18.x, TypeScript, Vitest, etc.)
- **Node version**: 20.x (see `.nvmrc`)
- **CSS compilation** must run before TypeScript build due to explicit Nx dependency (`dependsOn: ["^build-css"]`)
- **@hotcakes/eslint-config** is used as a workspace dev dependency and re-exported in root `eslint.config.js`
