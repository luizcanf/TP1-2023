const port = 8080;
const ip = Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family==='IPv4' && !i.internal && i.address || []), [])), [])[0]
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

const cors = require('cors')
app.use(cors())

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/tecnologias", (request, response) => {
    response.render("tec");
});

app.get("/objetivos", (request, response) => {
    response.render("objetivos");
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página (do Cesar) não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando. http://${ip}:${port}`);
});

/*
var http = require('http');

http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    console.log("My public IP address is: " + ip);
  });
});
 */