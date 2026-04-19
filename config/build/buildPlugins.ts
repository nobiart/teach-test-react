import HtmlWebpackPlugin from "html-webpack-plugin";
import { type WebpackPluginInstance, ProgressPlugin } from "webpack";
import { type BuildOptions } from "./types/config.ts";

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
    ]
}
