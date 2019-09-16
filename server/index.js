const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(bodyParser.json())

const firebase = require('./routes/queryDB');
app.use('/firebase', firebase)

app.get('/', (req, res) => {
  app.send('Hi')
})

app.listen(port, () => console.log(`Lestening on port ${port}`))
