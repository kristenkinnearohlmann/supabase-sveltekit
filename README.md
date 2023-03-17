# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## My Notes

- You may need to restart the Typescript language server to pick up changes
- Run `npm run dev` to generate new types
- May need to create root `tsconfig.json` to direct to the `svelte/tsconfig`
- May need to add paths to lib paths to `CompilerOptions/path` in `svelte/tsconfig`
- May need to create `env.d.ts` to declare types for environment variables
- <https://app.supabase.com/project/gyvgqvivdzupochjckdp/settings/api>
- <https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit>
- There is at least 1 unersolved TS error