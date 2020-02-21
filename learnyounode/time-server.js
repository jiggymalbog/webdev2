const net = require('net');
const portNumber = process.argv[2];

function zeroPad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

const server = net.createServer(function (socket) {
    const date = new Date();
    
    const year   = date.getFullYear();
    const month  = zeroPad(date.getMonth() + 1);
    const day    = zeroPad(date.getDate());
    const hour   = zeroPad(date.getHours());
    const minute = zeroPad(date.getMinutes());
    
    var dateString = year + '-' + month + '-' + day;
    dateString = dateString + ' ' + hour + ':' + minute;
    
    socket.end(dateString + '\n');
});

server.listen(portNumber); 