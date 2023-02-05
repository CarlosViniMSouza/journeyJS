/*
    1. Node.js as a File Server:
    
        The Node.js file system module allows you to work with the file system on your computer.

        To include the File System module, use the require() method:

        --> var fs = require('fs');
*/

var fs = require('fs');
var http = require('http');

/*
 * Common use for the File System module:

    Read files
    Create files
    Update files
    Delete files
    Rename files
*/

http.createServer(function (req, res) {
    fs.readFile('cap06.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);

        return res.end();
    });
}).listen(8080);
