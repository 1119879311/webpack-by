const { program } = require('commander');

program.version('0.0.1', '-v,--version', ' 这是版本描述');

// command() 如果第二参数存在(作为子命令的描述),，则会通过独立的的可执行文件实现命令, 执行文件: 当前工作目录/当前文件名-子命令.js
program
    .command('run')
    .argument('<pkgName>', '安装包名')
    .option('-p,--port <port>', '端口', 80)
    .action((data) => {
        console.log('run data', data);
    });

program.parse();

const getOpt = program.opts();
console.log('options:', getOpt);
