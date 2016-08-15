var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.css', '.png']
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
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file'
            },
            {
                test: /styles\/*.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.css$/,
                loader: 'raw'
            }
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