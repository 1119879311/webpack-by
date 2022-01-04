const { merge } = require('webpack-merge');
const { appIndex, appBuild } = require('./path');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
    //
    mode: 'development',
    // 入口配置
    entry: {
        app: appIndex,
    },

    // 出口配置
    output: {
        filename: 'static/js/bundle.js',
        path: appBuild,
    },
});
