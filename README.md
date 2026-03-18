# modern-nodejs-starter

A starting point for modern Node.js projects with TypeScript support and more!

## Quick Start

Run the project using Node.js type-stripping internal feature:

`npn run dev`

**Note:** This approach does not perform any type-checking. We rely on ESLint and IDE for early error/warning handling.

## Build

Before transpiling to JavaScript, it's important to always run `npm run typecheck` to ensure the TypeScript code is valid before deploying to production.

Build with `npm run build` and enjoy ;)

## Linting and Formatting

### ESLint

The configuration is focusing on Node.js and TypeScript enforcing reasonale rules.

_Note that it might be needed to configure you IDE of preference to use ESLint as the selected linter._

### Prettier

Prettier is installed along with a simple configuration.

_Note that it might be needed to configure you IDE of preference to use Prettier as the selected formatter._
