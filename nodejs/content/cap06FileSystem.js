var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    // Read HTML Files
    fs.readFile('cap06.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);

        return res.end({message: 'Server Up!'});
    });

    console.log('Server is Up!');
}).listen(3030);

// Create Files .txt
fs.appendFile(
    './archives/newFile01.txt', 
    'create file', 
    function (err) {
        if (err) { 
            return {message: 'Error on Operation'};
        }

        console.log('File Saved!');
    }
);

fs.appendFile(
    './archives/newFile02.txt', 
    'create file', 
    function (err) {
        if (err) { 
            return {message: 'Error on Operation'};
        }

        console.log('File 2 Saved!');
    }
);

// Update Files .txt
fs.writeFile(
    './archives/newFile01.txt', 
    'This is my text', 
    function (err) {
        if (err) { 
            return {message: 'Error on Operation'};
        }
        
        console.log('File Replaced!');
    }
);

/*
// Delete Files .txt
fs.unlink(
    './archives/newFile01.txt', 
    function (err) {
        if (err) { 
            return {message: 'Error on Operation'};
        }
        
        console.log('File deleted!');
    }
);
*/

// Rename Files .txt

fs.rename(
    'newFile02.txt', 
    'myRenamedFile02.txt', 
    function (err) {    
        if (err) { 
            return {message: 'Error on Operation'};
        }

        console.log('File Renamed!');
    }
);