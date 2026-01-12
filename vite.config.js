import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import vuetify from 'vite-plugin-vuetify';

const hostname = 'https://dirwalker.com/';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vuetify(), sitemap({ hostname: hostname })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
