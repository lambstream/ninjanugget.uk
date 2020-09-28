const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        styles: './src/styles/index.scss'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        port: 8080
    },
    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['styles'],
            filename: 'index.html'
        })
    ]
};
