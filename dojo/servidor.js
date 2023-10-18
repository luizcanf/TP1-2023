
const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }))

let num = Math.floor((Math.random()*100)+1)

app.get('/', (request, response) => {
    response.render('index')//views/index.ejs
})

app.get('/acertei', (req, res) => {
   let  numPedido = req.query.numPedido
   
   if(num == numPedido){
    console.log("O número escolhido está correto")
   }
else if (numPedido > num){
console.log("O número escolhido é maior do que o número sorteado")

}
else if ()
    res.render('index', {})
})

app.listen(8080)