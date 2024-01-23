import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		})
  ]
});