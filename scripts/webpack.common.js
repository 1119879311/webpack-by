const HtmlWebpackPlugin = require('html-webpack-plugin');
const { isEnvDevelopment } = require('./env');
const { appIndex, appHtml } = require('./path');

module.exports = {
    //
    // 入口配置
    entry: {
        app: appIndex,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appHtml,
            minify: isEnvDevelopment
                ? false
                : {
                      removeComments: true,
                      collapseWhitespace: true,
                      removeRedundantAttributes: true,
                      useShortDoctype: true,
                      removeEmptyAttributes: true,
                      removeStyleLinkTypeAttributes: true,
                      keepClosingSlash: true,
                      minifyJS: true,
                      minifyCSS: true,
                      minifyURLs: true,
                  },
        }),
    ],
};
