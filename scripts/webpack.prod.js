const { merge } = require('webpack-merge');
const { appIndex, appBuild, publicPath } = require('./path');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
    //
    mode: 'production',
    // 入口配置
    entry: {
        app: appIndex,
    },

    // 出口配置
    output: {
        filename: 'static/js/[name].[contenthash:8].js',
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
        path: appBuild,
        publicPath,
    },
});
