const fs = require('fs')

const file = fs.readFileSync(process.argv[2])
const lines = file.toString().split('\n').length - 1
console.log(lines)

    
    //for (let i = 2; i < process.argv.length; i++) {
    //  str += Number(process.argv[i])
    //}
    
   

