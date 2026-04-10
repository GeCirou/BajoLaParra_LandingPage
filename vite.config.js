import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Esto es vital para que React funcione
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // El plugin de React siempre va primero
    tailwindcss(),
  ],
})