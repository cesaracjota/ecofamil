// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://ecofamil.com',
    integrations: [
        mdx(),
        react(),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
        })
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    build: {
        inlineStylesheets: 'auto',
    },
    compressHTML: true,
});