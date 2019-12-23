require('./config/config');
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser')
app.get('/usuario', (req, res) => res.json('get usuario!'))
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/usuario', (req, res) => {

    let body = req.body

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        })
    }



})

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id; //ese id del final debe ser igual a :id

    res.json({
        id
    })


})

app.delete('/usuario', (req, res) => res.json('delete usuario!'))

app.listen(port, () => console.log(`Escuchando el puerto 3000 ${port}!`))