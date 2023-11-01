const port = 8080;
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

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
    console.log(`Servidor funcionando. http://localhost:${port}`);
});