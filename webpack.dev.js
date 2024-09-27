const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    cache: {
        type: 'filesystem', // Activa la caché en disco
    },
    devServer: {
        port: 3001,
        hot: true,
        historyApiFallback: true,
        liveReload: false,
        watchFiles: {
            paths: ['src/**/*'],  // Observa sólo archivos en `src`
            options: {
                ignored: /node_modules/, // Ignorar cambios en node_modules
            },
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 4, // Número de hilos a utilizar
                        },
                    },
                    {

                        loader: 'babel-loader',
                        options: {
                            plugins: [require.resolve('react-refresh/babel')],
                        },
                    }],
            },
        ],
    },
});
