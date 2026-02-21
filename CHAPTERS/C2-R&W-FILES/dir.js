const fs = require('fs')

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err
        console.log("Operation Completed.");
    })
    return
}
console.log('Dir Already Exists');

fs.rmdir('./new', (err) => {
    if (err) throw err
    console.log("Dir Removed.");
})