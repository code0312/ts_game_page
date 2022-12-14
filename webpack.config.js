const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'stylelint-custom-processor-loader'
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    devtool: 'inline-cheap-source-map',
    context: __dirname,
    target: 'web',
    devServer: {
        static: path.join(__dirname, 'dist'),
        // contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        compress: true,
        hot: true
    }
}