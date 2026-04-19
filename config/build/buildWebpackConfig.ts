import { Configuration } from "webpack";
import { type BuildOptions } from "./types/config.ts";
import { buildPlugins } from "./buildPlugins.ts";
import { buildLoaders } from "./buildLoaders.ts";
import { buildResolvers } from "./buildResolvers.ts";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {paths, mode} = options;
    
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    }
}
