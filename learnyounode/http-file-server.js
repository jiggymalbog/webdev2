const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
    const stream = fs.createReadStream(process.argv[3]); //process.argv[3] --> file stream
    stream.pipe(response);
});

server.listen(process.argv[2]);