const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    target: "electron-renderer",
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
              },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader?modules&importLoaders=1",
                    "resolve-url-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss", ".html", ".json"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};