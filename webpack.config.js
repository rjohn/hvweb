var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: APP_DIR + '/App.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'js/bundle.js',
        path: BUILD_DIR
    },
    module : {
        loaders : [
            {
                test    : /\.js?/,
                include : APP_DIR,
                loader  : 'babel-loader'
            },
            {
                test    : /\.jsx?/,
                include : APP_DIR,
                loader  : 'babel-loader'
            },
            {
                test    : /\.css?/,
                loader  : 'style-loader!css-loader!sass-loader'
            },
            {
                test    : /\.scss?/,
                loader  : 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.png$/,
                loader: "url-loader",
                query: { mimetype: "image/png" }
            },
            {
                test: /\.jpg$/,
                loader: "url-loader",
                query: { mimetype: "image/jpg" }
            },
            {
                test: /\.svg$/,
                loader: "url-loader",
                query: { mimetype: "image/svg" }
            },
            {
                test: /\.ttf$/,
                loader: "url-loader",
                query: { mimetype: "application/font-sfnt" }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;