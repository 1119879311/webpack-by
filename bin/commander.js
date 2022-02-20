// 1. Commander 提供了一个全局对象
const { program, Option } = require('commander');

// 2.以多种方式来使用 Commander，如单元测试等。创建本地Command对象是一种更好的方式：
// const { Command } = require('commander');

// const program = new Command();

console.log('program', program);

// 1. 选项:Commander 使用.option()方法来定义选项，同时可以附加选项的简介

// program
//     .option('-d, --debug', '这是debug 参数')
//     .option('-s,--small', ' 这是其他参数');

// 2：.-----常用选项类型，boolean 型选项和带参数选项
program
    // 不需设置参数的，类型是boolean
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    // 需要设置参数的 ，使用<>
    .option('-p, --pizza-type <type>', 'flavour of pizza');

// 3： 选项默认值

program.option('-e,--env <envs>', '环境变量');

// 4. 其他的选项类型，取反选项，以及可选参数的选项
// 以-no 开头为 false
program
    .option('--no-cheese', 'cheese flavour')
    .option('--cheese <chse>', 'cheese flavour', 'default-cheese');

// 5：  必填选项 requiredOption
program.requiredOption('-t,--tort <type>', '端口必须指定', 200);

// 6： 变长参数选项

program
    .option('-n,--number <numbers...>', '多个必填参数', 12)
    .option('-l,--letter [letters...]', '多个可填参数');

console.log('args:', process.argv);

// 7: 版本选项
program.version('0.0.1', '-v,--version', ' 这是版本描述');

// 8：其他配置选项 使用addOption 和 Option 实例 添加
// choices([]) 枚举
program
    .addOption(
        new Option('-y,--ysenconds <ys>', '毫秒', 200).default(60, '一分钟60s'),
    )
    .addOption(
        new Option('-z,--ztype <type>', 'drink size').choices([
            'small',
            'medium',
            'large',
        ]),
    );

// 9：自定义选项处理
function myParseInt(value, dummyPrevious) {
    console.log('value', dummyPrevious);
    const result = parseInt(value, 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(result)) {
        throw new Error(' 必须是正整数');
    }
    return result;
}

program.option('-i, --integer <number>', 'integer argument', myParseInt, '2');

// 10: 命令

program
    .command('run', '启动项目')
    .option('-p,--port', '项目启动端口', 80)
    .action((data) => {
        console.log('heat pot', data);
    });

program.parse(process.argv);
const opts = program.opts();

console.log('opts', opts);
