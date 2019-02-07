const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Integraçao com banco de dados
mongoose.connect('mongodb://luccasoli:admin123@ds225375.mlab.com:25375/omni_lucas',
{
    useNewUrlParser: true
})

app.use(express.json())
app.use(require('./routes'))

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000')
})