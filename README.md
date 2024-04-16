# Testing Payload CMS inside Nuxt 

Requirements:
+ postgres, the repo includes a docker-compose for quickstart (docker compose up -d), adjust connection string in payload.config.js

Just a simple test to see wether PayloadCMS 3.0 beta could work inside Nuxt. Payload Init code taken from [payload-3.0-demo](https://github.com/payloadcms/payload-3.0-demo)
Accessing table data on server works as expected (@/server/routes/test.ts) and result type is passed through to frontend (@/app.vue)

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
