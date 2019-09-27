const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload());

const firebase = require('./routes/queryDB');
const poke = require('./routes/poke');
const sendMsg = require('./routes/sendMsg');

app.use('/firebase', firebase)
app.use('/poke', poke)
app.use('/sendMsg', sendMsg)

app.get('/', (req, res) => {
  app.send('Hi')
})

app.listen(port, () => console.log(`Lestening on port ${port}`))
