
const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }))

let num = Math.floor((Math.random()*100)+1)

app.get('/', (request, response) => {
    response.render('index')//views/index.ejs
})

app.get('/acertei', (req, res) => {
   let  numPedido = req.query.numPedido
   var resultado

   if(num == numPedido){
    resultado ="O número escolhido está correto"
   }
else if (numPedido > num){
resultado ="O número escolhido é maior do que o número sorteado"

}
else if (numPedido < num){
    resultado ="O número escolhido é menor do que o número sorteado"
}
else if (isNaN(num)) {
    console.log("Valores Inválidos")
}
    res.render('index', {resultado})
})

app.listen(8080)