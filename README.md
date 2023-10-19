# superdocus-sample

Some [Docus](https://docus.dev) experiments.

## Setup

Install dependencies:

```bash
npx bun install
```

## Development

```bash
npx bun run dev
```

## Edge Side Rendering

Can be deployed to Vercel Functions, Netlify Functions, AWS, and most Node-compatible environments.

Look at all the available presets [here](https://v3.nuxtjs.org/guide/deploy/presets).

```bash
npx bun run build
```

## Static Generation

Use the `generate` command to build your application.

The HTML files will be generated in the .output/public directory and ready to be deployed to any static compatible hosting.

```bash
npx bun run generate
```

## Preview build

You might want to preview the result of your build locally, to do so, run the following command:

```bash
npx bun run preview
```

---

For a detailed explanation of how things work, check out [Docus](https://docus.dev).


## changelog

```shell
# docus
npx nuxi@latest init superdocus-sample -t themes/docus
cd superdocus-sample
npx bun install
```