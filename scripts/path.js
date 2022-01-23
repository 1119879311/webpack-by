const path = require('path');
const fs = require('fs');
const { isEnvProduction } = require('./env');

// 获取节点执行的文件的工作目录
const PROJECT_ROOT = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => {
    return path.resolve(PROJECT_ROOT, relativePath);
};
const homePage = require(resolveApp('package.json')).homePage;
const publicPath = isEnvProduction ? homePage || '/' : '/';

module.exports = {
    appBuild: resolveApp('dist'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndex: resolveApp('src/index'),
    appSrc: resolveApp('src'),
    appNodeModules: resolveApp('node_modules'),
    PROJECT_ROOT,
    resolveApp,
    publicPath,
};
