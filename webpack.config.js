var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.css']
    },
    devtool: 'source-map',
    output: {
        path: './target',
        filename: 'app.bundle.js',
        libraryTarget: 'var',
        library: 'App'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};