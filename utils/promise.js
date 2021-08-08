
const util = require('util')

let scheduler = {

    promise: async (task, params = [], times = 1) => {
        let promiseList = []
        let taskPromise = task
        
        if (!util.types.isAsyncFunction(taskPromise)) {
            taskPromise = util.promisify(taskPromise)
        }

        for (let i = 0; i < times; i++) {
            promiseList.push(taskPromise(...params))
        }

        return await Promise.all(promiseList)

    }

}



module.exports = {

    scheduler
}

