import { UserConfig } from 'vite';
declare const viteBuildConfig: (config?: UserConfig | undefined) => import("vite").UserConfigExport;
export default viteBuildConfig;
