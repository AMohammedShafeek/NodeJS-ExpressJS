const fs = require('fs')
const path = require('path')

// fs.writeFile('./txt-files/write1.txt', "What Happened Bro?", (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("Operation Completed.");
// })

fs.writeFile(path.join(__dirname, 'txt-files', 'write2.txt'), "Nothing Bro.", (err) => {
    if (err) {
        throw err
    }
    console.log("Read Using Path: Operation Completed.");
})

fs.appendFile(path.join(__dirname, 'txt-files', 'write3.txt'), " I HATE YOU", (err) => {
    if (err) {
        throw err
    }
    console.log("APPEND: Operation Completed.");
})

fs.writeFile(path.join(__dirname, 'txt-files', 'write4.txt'), "Nothing Bro.", (err) => {
    if (err) {
        throw err
    }
    console.log("Read Using Path: Operation Completed.");

    fs.appendFile(path.join(__dirname, 'txt-files', 'write4.txt'), " I HATE YOU", (err) => {
        if (err) {
            throw err
        }
        console.log("APPEND: Operation Completed.");
    })
})

fs.writeFile(path.join(__dirname, 'txt-files', 'write4.txt'), "Nothing Bro.", (err) => {
    if (err) {
        throw err
    }
    console.log("Read Using Path: Operation Completed.");

    fs.appendFile(path.join(__dirname, 'txt-files', 'write4.txt'), " I HATE YOU", (err) => {
        if (err) {
            throw err
        }
        console.log("APPEND: Operation Completed.");

        fs.rename(path.join(__dirname, 'txt-files', 'write4.txt'), path.join(__dirname, 'txt-files', 'write4-1.txt'), (err) => {
            if (err) {
                throw err
            }
            console.log("RENAME: Operation Completed.");
        })
    })
})


