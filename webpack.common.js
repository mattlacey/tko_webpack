const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/app/app.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "TKO + Webpack",
            template: "./src/app/index.html",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, "src/components/"),
            App: path.resolve(__dirname, "src/app/"),
            Css: path.resolve(__dirname, "src/css/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
