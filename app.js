const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("this site is working " + req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    let myZuri = {
        slackUsername: "james babatunde",
        backend: true,
        age: 22,
        bio: "Am james and an aspiring backend developer"
    }
    res.end(JSON.stringify(myZuri));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});