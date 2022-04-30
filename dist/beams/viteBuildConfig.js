"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const viteServerConfig_1 = __importDefault(require("./viteServerConfig"));
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_plugin_laravel_1 = __importDefault(require("vite-plugin-laravel"));
const vite_plugin_css_injected_by_js_1 = __importDefault(require("vite-plugin-css-injected-by-js"));
const vite_tsconfig_paths_1 = __importDefault(require("vite-tsconfig-paths"));
const viteBuildConfig = (config) => {
    return (0, vite_1.defineConfig)({
        ...config,
        plugins: [(0, vite_tsconfig_paths_1.default)(), (0, vite_plugin_css_injected_by_js_1.default)(), (0, plugin_react_1.default)(), (0, vite_plugin_laravel_1.default)(), ...(config?.plugins ?? [])],
        /* Do not disable. If you're having issues with this contact @CristianHG */
        server: (0, viteServerConfig_1.default)(),
        build: {
            target: 'es2021',
            minify: 'terser',
            ...(config?.build ?? {}),
        },
    });
};
exports.default = viteBuildConfig;
//# sourceMappingURL=viteBuildConfig.js.map