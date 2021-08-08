
const path = require('path')

exports.command = 'hfTest'

exports.describe = '合肥测试'

exports.builder = function (yargs) {
  return yargs
    .option('faceContrast', {
      describe: '人脸比对接口测试(无需带参)',
      type: 'string'
    })
    // .option('typeString', {
    //   describe: 'string类型',
    //   type: 'string'
    // })
    // .option('typeNumber', {
    //   describe: 'number类型',
    //   default: 1,
    //   type: 'number'
    // })
    .help()
    .showHelpOnFail(true, '使用--help查看有效选项')
    .epilog('copyright 2021 lmon');
}

exports.handler = async function (argv) {
  let command = argv._[0]
  console.log('12312',argv)
  console.log(__dirname)
}  