import path from "node:path";
import { fileURLToPath } from "node:url";
import { type Configuration } from "webpack";
import { type BuildEnv, type BuildPaths } from './config/build/types/config.ts';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });

  return config;
};
