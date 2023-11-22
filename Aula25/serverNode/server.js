const port = 8080;
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/", (request, response) => {
    let result = ''
    response.render("soma4", {result});
});

app.get("/soma", (request, response) => {
    let soma = parseFloat(request.query.num1) + parseFloat(request.query.num2)
    response.render("soma4", {result: soma});
});

app.listen(port, () => {
    console.log(`Servidor funcionando. http://localhost:${port}`);
});