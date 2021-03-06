require('./config/config')
const express = require('express')
const mongoose = require('mongoose');

const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


//Configuracion Global de rutas
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB,
    (err, res) => {
        if (err) throw err;

        console.log('base de datos ONLINE');
    });

app.listen(process.env.PORT)

//habilitar la carpeta  public
const path = require('path');
app.use(express.static(path.resolve(__dirname, '../public')))