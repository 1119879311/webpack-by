const path = require('path');
const fs = require('fs');

// 获取节点执行的文件的工作目录
const PROJECT_ROOT = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => {
    return path.resolve(PROJECT_ROOT, relativePath);
};

module.exports = {
    appBuild: resolveApp('dist'),
    appPublic: resolveApp('appPublic'),
    appIndex: resolveApp('src/index'),
    PROJECT_ROOT,
    resolveApp,
};
