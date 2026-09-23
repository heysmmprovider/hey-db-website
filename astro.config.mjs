// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set the public website origin at build time to enable canonical and sharing URLs.
  site: process.env.SITE_URL,
  devToolbar: { enabled: false },
});
