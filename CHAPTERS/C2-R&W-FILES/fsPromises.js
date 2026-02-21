const fsP = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsP.readFile(path.join(__dirname, 'txt-files', 'text1.txt'), 'utf8')
        console.log(data);

    } catch (err) {
        console.error(err)
    }
}

fileOps()