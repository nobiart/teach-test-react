import path from 'node:path';
import { type Configuration } from "webpack";
import { type BuildPaths } from './config/build/types/config.ts';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig.ts";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = "development"
const isDev = mode === "development";

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev
});

export default config;
