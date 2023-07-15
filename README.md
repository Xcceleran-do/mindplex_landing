# Mindplex Langing page 

![image](https://github.com/Xcceleran-do/mindplex_landing/assets/56738450/376397da-0307-48d2-b1ee-cc7a8dda354b)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── chainIcon.png
│   ├── ecosystemIcon.png
│   ├── favicon.svg
│   ├── governanceIcon.png
│   ├── hero_arrow.svg
│   ├── hero_blurred.svg
│   ├── hero_ellipse.svg
│   ├── hero_main.png
│   ├── line.svg
│   ├── logo.svg
│   ├── mindplex_ai.png
│   ├── reputationIcon.png
│   ├── small_line.svg
│   ├── stakingIcon.png
│   └── utilityIcon.png
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Joinus.astro
│   │   │   ├── Mindplex.astro
│   │   │   ├── MindplexTokens.astro
│   │   │   ├── OurAi.astro
│   │   │   └── OurTeam.astro
│   │   ├── _Card.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── Navbar.astro
│   ├── layouts/
│   │   ├── CardLayout.astro
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── env.d.ts
├── astro.config.mjs
├── folder-structure.md
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn`                    | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:3000`      |
| `yarn build`              | Build your production site to `./dist/`          |
| `yarn preview`            | Preview your build locally, before deploying     |
| `yarn astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help`    | Get help using the Astro CLI                     |

