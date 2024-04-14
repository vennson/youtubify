## Technologies used

Frontend:
- [Next.js](https://nextjs.org/) - React framework & backend server
- [Mantine](https://mantine.dev/) - UI framework
- [Zustand](https://github.com/pmndrs/zustand) - State management library
- [TypeScript](https://www.typescriptlang.org/) - JavaScript static type checker

Backend:
- [Next.js](https://nextjs.org/) - React framework & backend server
- [Prisma](https://www.prisma.io/) - Prisma
- [RapidAPI](https://rapidapi.com/Glavier/api/youtube138/) - YouTube API
- [Vercel](https://vercel.com/) - Deployment platform

## Getting started

1. Prerequisites:
   - [pnpm](https://pnpm.io/installation)

2. Ask a contributor for the following credentials then save it to the `.env` file in the root directory:
```bash
# .env
X_RAPID_API_KEY=***
X_RAPID_API_HOST=***
```

1. To run the nextjs local development server, run:
```bash
pnpm install
pnpm dev
```

1. And in another terminal, run the grafbase local server:
```bash
npx grafbase dev
```
