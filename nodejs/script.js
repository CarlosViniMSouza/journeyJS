let http = require('http');

const port = 3300;

http.createServer((request, response) => {
    console.log(`Server is Up on ${port}`);

    response.end(JSON.stringify({ message: 'Hello, world!' }));
}).listen(port);
