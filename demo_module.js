var http = require('http');
var dt = require('./myfirstmodule');
// var os = require('os')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime() + '</br>');
    res.write("*********");
    res.end('Hello World!');
}).listen(8080);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write("The date and time are currently: " + dt.myDateTime() + os.EOL);
//     // res.write("The date and time are currently: " + dt.myDateTime() + '\n');
//     res.write("*********");
//     res.end('Hello World!');
// }).listen(8080); 
