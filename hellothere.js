const port = 8000;
const http = require('http');

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write("Hello, World!");
    res.end();
})

server.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);