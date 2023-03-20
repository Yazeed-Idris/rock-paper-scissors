import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/rock-paper-scissors-lizard-spock-production/",
    plugins: [react()],
})
