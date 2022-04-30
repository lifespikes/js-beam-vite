declare const viteServerConfig: () => {
    host: string;
    port: number;
    https: boolean | {
        key: string;
        cert: string;
    };
    hmr: {
        host: string;
    };
    proxy: {
        [x: string]: string;
    };
};
export default viteServerConfig;
