const fs = require('fs')
const path = require('path')

fs.unlink(path.join(__dirname, 'txt-files', 'write4-1.txt'), (err) => {
    if (err) {
        throw err
    }
    console.log("Operation Completed.");
})