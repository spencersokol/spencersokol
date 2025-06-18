import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { SimplePosts } from "@idkwtm/simple-posts/vite"
import { MySimplePostFactory } from './src/utils/simple-post'
import VitePluginWebpCompress from 'vite-plugin-webp-compress';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(), 
        tailwindcss(),
        SimplePosts({
            postFactory: new MySimplePostFactory(),
            additionalPostTypes: [{
                name: 'portfolio',
                directory: 'portfolio'
            }]
        }),
        VitePluginWebpCompress()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
