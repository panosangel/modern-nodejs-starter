# modern-nodejs-starter

A starting point for modern Node.js projects with TypeScript support and more!

## Quick Start

TypeScript can be run using 2 different ways:
- tsx
- Node.js experimental feature! (preferable)

Both approaches remove TypeScript types and other features, without performing any type-checking. It's similar to how the Bun runtime works ;)

Therefore, it's important to always run `tsc --noEmit` to ensure the TypeScript code is valid before deploying to production.

## Linting and Formatting

### ESLint

Command `npm init @eslint/config@latest` was run and have been configured as follows:

```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · typescript
✔ Where does your code run? · node
```

_Note that it might be needed to configure you IDE of preference to use ESLint as the selected linter._

### Prettier

Prettier is installed along with a simple configuration.

_Note that it might be needed to configure you IDE of preference to use Prettier as the selected formatter._
