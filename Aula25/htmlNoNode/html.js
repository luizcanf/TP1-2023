const port = 8080;
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/", (request, response) => {
    response.render("soma2");
});

app.listen(port, () => {
    console.log(`Servidor funcionando. http://localhost:${port}`);
});