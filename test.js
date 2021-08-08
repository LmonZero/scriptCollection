// String.prototype.replaceWithMask = function (start, end) {
//     return this.substr(0, start) + '******' + this.substr(-end, end)
// }

// let moment = require('moment')
// console.log(moment().startOf('days').add(2,'hours').format('YYYYMMDDHHmmss'))
// let a= undefined
// console.log(Object.prototype.toString.call(a))
let q = ['aa', 2, 3]
function a(x, v, b) {
    return new Promise((reslove, reject) => {
        console.log(x)
        console.log(v)
        console.log(b)
        reslove('ok')

    })
}

async function main(){
    await a(...q)
} 

main()