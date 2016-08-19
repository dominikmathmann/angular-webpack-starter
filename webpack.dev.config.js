var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    devServer: {
        proxy: {
            '/*': 'http://localhost:3000/'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.runtime': '"development"',
        }),
    ]
});