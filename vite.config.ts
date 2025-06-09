import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import SimplePosts from "@idkwtm/simple-posts/vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(), 
        tailwindcss(),
        SimplePosts()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
