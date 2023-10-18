const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

let num = Math.floor((Math.random()*100)+1)

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/acertei', (req, res) => {
   

    res.render('index', {})
})

app.listen(8080)