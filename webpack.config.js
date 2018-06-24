const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        index: './src/adapters/entrypoint/index.ts'
    },
    devtool: 'inline-source-map',
    output: {
        libraryTarget: 'this',
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
        ]
    },
    plugins: [
        new GasPlugin(),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': ''
        })
    ]


}




