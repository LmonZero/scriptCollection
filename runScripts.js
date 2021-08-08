const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers') //hideBin是 的简写process.argv.slice(2)。它的好处是它考虑了某些环境中的变化，例如Electron。
/**
 * 命令执行入口
 */
var Scripts_Run = (argv) => {
    yargs((argv || process.argv).slice(2))
        .commandDir('command')
        .demand(1)
        .config('config', 'JSON配置文件路径')
        .help()
        .alias('h', 'help')
        .locale('en')
        .showHelpOnFail(true, '使用--help查看有效选项') 
        .epilog('*****copyright 2021 lmon*****') // A message to print at the end of the usage instructions
        .argv;
}
module.exports = {
    run: Scripts_Run
}