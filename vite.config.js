import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

/**
 * Tailwind's config is read by the PostCSS plugin, not by Vite's module graph,
 * so editing design tokens can leave a running dev server serving a stale
 * utility set (e.g. "the `dark:bg-surface-alt-d` class does not exist").
 * Restart instead of serving something stale.
 */
const restartOnTailwindConfigChange = () => ({
  name: 'restart-on-tailwind-config-change',
  configureServer(server) {
    const file = fileURLToPath(new URL('./tailwind.config.js', import.meta.url))
    server.watcher.add(file)
    server.watcher.on('change', (changed) => {
      if (changed === file) server.restart()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), restartOnTailwindConfigChange()],
})