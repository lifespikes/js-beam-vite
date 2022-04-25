"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true, get: function () {
      return m[k];
    }
  });
}) : (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
  Object.defineProperty(o, "default", {enumerable: true, value: v});
}) : function (o, v) {
  o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {value: true});
const dotenv = __importStar(require("dotenv"));
const dotEnvExpand = __importStar(require("dotenv-expand"));
/* Parse dotenv */
const env = dotenv.config({
  path: process.cwd() + '/.env',
});
dotEnvExpand.expand(env);
const {VITE_URL, VITE_PORT, VITE_PUBLIC_URL, VITE_SSL, VITE_SSL_KEY, VITE_SSL_CERT,} = process.env;
const origin = VITE_PUBLIC_URL ?? '';
const hostFromUrl = (url) => new URL(url).hostname;
const getSslParams = () => {
  const [enabled, key, cert] = [VITE_SSL, VITE_SSL_KEY, VITE_SSL_CERT];
  return enabled !== 'true' ? false : key && cert ? {key, cert} : true;
};
const getHmrParams = () => ({
  host: hostFromUrl(origin),
});
const viteServerConfig = () => {
  try {
    return {
      host: hostFromUrl(VITE_URL ?? ''),
      port: Number(VITE_PORT),
      https: getSslParams(),
      hmr: getHmrParams(),
      /* Mitigate HTTP2 errors */
      proxy: {[origin]: origin},
    };
  } catch (e) {
    console.log(process.env);
    throw e;
  }
};
exports.default = viteServerConfig;
//# sourceMappingURL=viteServerConfig.js.map
