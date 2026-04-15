# icommand Landing Page

A modern landing page for **icommand** — a semantic command history search tool that helps developers find and re-use git and shell commands intelligently.

## About icommand

icommand is a powerful tool that lets you search your command history the way you think, using semantic search and local AI-powered embeddings. Features include:

- **Semantic Search**: Uses local vector embeddings to understand intent behind queries, not just string matching
- **Works Offline**: Zero latency. No data leaves your machine. Your history remains private and secure
- **Universal Shell**: Seamless integration with Zsh and Bash via a single binary. No complex config
- **Instant Results**: Built for fast startup and search times, even with massive command histories

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

The page will auto-reload as you make changes to files in `src/`.

### Build

Build for production:

```bash
npm run build
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with React 19
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Language**: TypeScript

## Deployment

Deploy to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourrepo%2Ficommand-landing)

Or manually deploy to any hosting platform that supports Next.js applications.

## License

MIT
