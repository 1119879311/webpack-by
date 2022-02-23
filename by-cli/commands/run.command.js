const AbstractCommand = require('./abstract.command');

// eslint-disable-next-line import/prefer-default-export
module.exports = class RunCommand extends AbstractCommand {
    // eslint-disable-next-line class-methods-use-this
    load(program) {
        program
            .command('run')
            .option(
                '-c,--conifg [config]',
                '指定运行的webpac配置文件,相对于当前工作目录',
            )
            .option('-m,--mode [mode]', '运行环境', 'none')
            .option('-p,--port [port]', '端口')
            .option('-e,--env [env...]', '环境参数')
            .action((data) => {
                console.log(
                    'action',
                    this.action.handler(data, program.opts()),
                );
                console.log('run data:', data);
            });
    }
};
