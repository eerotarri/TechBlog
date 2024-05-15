This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Create NextAuth secrets

To enable authentication, you need to create a `.env.local` file in the root of the project with the following variables:

```bash
NEXTAUTH_SECRET=<your_secret>
NEXTAUTH_URL=http://localhost:3000/api/auth
```

The secret can be anyt string you want, but it should be long and random.
Additionally you can add Google OAuth credentials to enable Google authentication following the instructions in the [NextAuth.js documentation](https://next-auth.js.org/providers/google) and adding the variables:

```bash
GOOGLE_CLIENT_ID=<your_google_id>
GOOGLE_CLIENT_SECRET=<your_google_secret>
```

That is all the set up necessary to get started with this project.

### **Everything else is sandboxed and ready to be used.**
