const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/", (requisicao, resposta) => {
    //resposta.send("<h1>AOP!</h1>")
    resposta.render("index")
})

app.post("/saudar", (requisicao, resposta) => {
    console.log(requisicao.body.pessoa)
    resposta.render("saudacao", {nome: requisicao.body.pessoa})
})

app.listen(8080)