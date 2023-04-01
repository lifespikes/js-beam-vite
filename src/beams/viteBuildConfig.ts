import getHttpConfig from './viteServerConfig';
import {defineConfig, UserConfig} from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import tsconfigPaths from 'vite-tsconfig-paths'
import * as path from "path";

type LaravelPluginArgsType = Parameters<typeof laravel>[0];

const viteBuildConfig = (config?: UserConfig, laravelConfig?: LaravelPluginArgsType) => {
  return defineConfig({
    ...config,

    plugins: [tsconfigPaths({
      root: path.resolve(process.cwd()),
    }), cssInjectedByJsPlugin(), react(), laravel(laravelConfig ?? {
      input: 'resources/js/app.tsx',
      refresh: true,
    }), ...(config?.plugins ?? [])],

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
