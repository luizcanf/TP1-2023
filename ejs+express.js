const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render("index"); // views/index.ejs
});

app.get("/exemplo", (request, response) => {
    response.render("teste"); // views/teste.ejs
});

app.get("/ola", (request, response) => {
    response.send(`Olá, ${request.query.nome}`);
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});