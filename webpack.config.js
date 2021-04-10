const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    optimization:{
        minimize: true,
        minimizer:[
            new CssMinimizerPlugin()
        ] 
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 1234,
        host: "localhost",
        hot: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Canvas Chart",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
}