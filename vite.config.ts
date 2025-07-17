import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { SimplePosts } from "@idkwtm/simple-posts/vite"
import VitePluginWebpCompress from 'vite-plugin-webp-compress';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(), 
        tailwindcss(),
        VitePluginWebpCompress(),
        SimplePosts({
            siteTitle: 'Spencer Sokol',
            siteDescription: 'My Own Personal Digital Garden',
            pretty: true,
            additionalPostTypes: [{
                name: 'portfolio',
                directory: 'portfolio',
                prefix: 'portfolio'
            }],
            author: {
                name: 'Spencer Sokol',
                email: 'spencer@idkwtm.com',
                link: 'https://spencersokol.com/about/'
            },
            rssExcludePostTypes: ['page', 'portfolio'],
            rootUrl: 'https://spencersokol.com'
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
