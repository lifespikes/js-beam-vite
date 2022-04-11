import getHttpConfig from './viteServerConfig';
import {defineConfig, UserConfig} from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'vite-plugin-laravel';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const viteBuildConfig = (config?: UserConfig) => {
  return defineConfig({
    ...config,

    plugins: [cssInjectedByJsPlugin(), react(), laravel(), ...(config?.plugins ?? [])],

    /* Do not disable. If you're having issues with this contact @CristianHG */
    server: getHttpConfig(),
    build: {
      target: 'es2021',
      minify: 'terser',
      ...(config?.build ?? {}),
    },
  });
};

export default viteBuildConfig;
