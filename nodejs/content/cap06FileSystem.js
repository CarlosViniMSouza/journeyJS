/*
    1. Node.js as a File Server:
    
        ° The Node.js file system module allows you to work with the file system on your computer.
        ° To include the File System module, use the require() method:

            --> var fs = require('fs');

    2. Common use for the File System module:

        ° Read files:
            -> fs.readFile()

        ° Create files:
            -> fs.appendFile()
            -> fs.open()
            -> fs.writeFile()

        ° Update files:
            -> fs.appendFile()
            -> fs.writeFile()

        ° Delete files
        ° Rename files
*/

var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    // Read HTML Files
    fs.readFile('cap06.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);

        return res.end();
    });
    
    console.log('Server is Up!');
}).listen(3030);

// Create Files .txt
fs.appendFile(
    './archives/newFile01.txt', 
    'create file', 
    function (err) {
        if (err) throw err;
        console.log('File Saved!');
    }
);

// Update Files .txt
fs.writeFile(
    './archives/newFile01.txt', 
    'This is my text', 
    function (err) {
        if (err) throw err;
        console.log('File Replaced!');
    }
);
