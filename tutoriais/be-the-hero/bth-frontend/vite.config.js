import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // mantem o prefixo antigo do CRA para nao quebrar o .env existente
  envPrefix: 'REACT_APP_',
  server: { port: 3000 },
  build: { outDir: 'build' }
})
