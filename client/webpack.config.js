// Importing Package
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    resolve: {
        alias: {
            // Add an alias for the 'src' directory
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx'] // Add any other file extensions you're using
    },
    mode: 'development',
    entry: './src/main.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src')
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // Extract CSS into separate files
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    optimization: {
        minimizer: [
            // Minify CSS
            new CssMinimizerPlugin(),
            // Other minimizers...
        ],
    },
}