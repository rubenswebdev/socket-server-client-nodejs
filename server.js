var net = require('net');
var port = 5000;
var unixsocket = '/tmp/v2.sock';

var server = net.createServer(echo);
server.listen(port);

function echo(socket) {

    socket.on('end', function() {
        console.log('[socket on end]');
    });

    socket.on('data', function(data) {
        console.log('[socket on data]', data.toString());
        socket.write('Echo server\r\n');
    });

    socket.on('end', function() {
    });

    socket.on('timeout', function () {
        console.log('Deu timeout');
    });

    socket.on('drain', function() {
        console.log('[socket on drain]');
    });

    socket.on('error', function() {
        console.log('socket', 'error')
    });

    socket.on('close', function() {
        console.log('socket', 'close')
    });

    socket.pipe(socket);
};