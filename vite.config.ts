import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  if (isLib) {
    // Configuração para build de biblioteca
    return {
      plugins: [
        viteReact(),
        dts({ 
          insertTypesEntry: true,
          rollupTypes: true,
          exclude: ['node_modules/**', 'dist/**', 'src/**/*spec.*'],
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'AppGenerator',
          fileName: (format) => `index.${format}.js`,
          formats: ['es', 'cjs']
        },
        rollupOptions: {
          external: [
            'react',
            'react-dom',
            '@tanstack/react-router',
          ],
          output: {
            globals: {
              'react': 'React',
              'react-dom': 'ReactDOM',
              '@tanstack/react-router': 'TanStackReactRouter',
            }
          }
        },
        cssCodeSplit: false
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, './src'),
        },
      },
    }
  }

  // Configuração para desenvolvimento/build normal
  return {
    plugins: [
      TanStackRouterVite({ autoCodeSplitting: true }),
      viteReact()
    ],
    test: {
      globals: true,
      environment: 'jsdom',
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  }
})