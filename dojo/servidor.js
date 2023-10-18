
const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }))

let num = Math.floor((Math.random()*100)+1)

app.get('/', (request, response) => {
    response.render('index')//views/index.ejs
})

app.get('/acertei', (req, res) => {
   const data = {
     data.required.numPedido
   }
 let resposta
   if(num == numPedido){
    
   }

    res.render('index', {})
})

app.listen(8080)