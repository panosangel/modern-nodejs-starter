# modern-nodejs-starter

A starting point for modern Node.js projects with TypeScript support and more!

## Quick Start

TypeScript can be run using 2 different ways:
- tsx
- Node.js experimental feature! (preferable)

Both approaches remove TypeScript types and other features, without performing any type-checking. It's similar to how the Bun runtime works ;)

Therefore, it's important to always run `tsc --noEmit` to ensure the TypeScript code is valid before deploying to production.