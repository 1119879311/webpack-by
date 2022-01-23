const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const {
    appIndex,
    appBuild,
    appPublic,
    appSrc,
    appNodeModules,
} = require('./path');
const webpackCommon = require('./webpack.common');
const path = require('path');

const useEslit = false;

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
        chunkFilename: 'static/js/[name].chunk.js',
        path: appBuild,
    },
    plugins: [
        useEslit &&
            new ESLintWebpackPlugin({
                extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
                eslintPath: require.resolve('eslint'),
                context: appSrc,
                cache: true,
                cacheLocation: path.resolve(
                    appNodeModules,
                    '.cache/.eslintcache',
                ),
                baseConfig: {
                    extends: require.resolve('./eslint-config-base.js'),
                    rules: {
                        'react/react-in-jsx-scope': 'error',
                    },
                },
            }),
    ].filter(Boolean),
    devServer: {
        host: '127.0.0.1',
        port: '3000',
        // compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
        static: appPublic,
    },
});
