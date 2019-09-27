const express = require('express')
const router = express.Router()
const sendEmail = require('../sendEmail');

router.post('/', async (req,res) => {
  sendEmail.sendMsg(req)
  res.status(201).send('Email sent')
})

module.exports = router
