import { UserConfig } from 'vite';
declare const viteBuildConfig: (config?: UserConfig) => import("vite").UserConfigExport;
export default viteBuildConfig;
