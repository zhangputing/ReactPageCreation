import path from "path";
import { Configuration } from "webpack";
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

function getEntry() {
    const entry: Record<string, string> = {};
    glob.sync("./src/pages/*/index.tsx").forEach((filePath: string) => {
        let name = filePath.match(/\/pages\/(.+)\/index.tsx/);
        if (name) {
            let dir = name[1];
            entry[dir] = filePath;
        }
    });
    return entry;
}

const config: Configuration = {
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js",
        publicPath: "/",
    },
    mode: "production",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new MinifyPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: __dirname + "/dist",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            modules: {
                                localIdentName: "[local]",
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
        ],
    },
};

export default config;
