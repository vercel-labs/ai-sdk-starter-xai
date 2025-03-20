<a href="https://ai-sdk-starter-xai.vercel.app">
  <h1 align="center">Vercel x xAI Chatbot</h1>
</a>

<p align="center">
  An open-source AI chatbot app template built with Next.js, the AI SDK by Vercel, and xAI.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- Streaming text responses powered by the [AI SDK by Vercel](https://sdk.vercel.ai/docs), allowing multiple AI providers to be used interchangeably with just a few lines of code.
- Built-in tool integration for extending AI capabilities (demonstrated with a weather tool example).
- Reasoning model support.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router.

## Deploy Your Own

You can deploy your own version to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=Vercel+x+xAI+Chatbot&repository-name=ai-sdk-starter-xai&repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-starter-xai&demo-title=Vercel+x+xAI+Chatbot&demo-url=https%3A%2F%2Fai-sdk-starter-xai.labs.vercel.dev%2F&demo-description=A+simple+chatbot+application+built+with+Next.js+that+uses+xAI+via+the+AI+SDK+and+the+Vercel+Marketplace&products=[{%22type%22:%22integration%22,%22protocol%22:%22ai%22,%22productSlug%22:%22grok%22,%22integrationSlug%22:%22xai%22}])

## Running Locally

1. Clone the repository and install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Install the [Vercel CLI](https://vercel.com/docs/cli):

   ```bash
   npm i -g vercel
   # or
   yarn global add vercel
   # or
   pnpm install -g vercel
   ```

   Once installed, link your local project to your Vercel project:

   ```bash
   vercel link
   ```

   After linking, pull your environment variables:

   ```bash
   vercel env pull
   ```

   This will create a `.env.local` file with all the necessary environment variables.

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your new AI chatbot application.

## Authors

This repository is maintained by the [Vercel](https://vercel.com) team and community contributors.

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.
