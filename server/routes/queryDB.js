const express = require('express')
const router = express.Router()
const  firebase = require ('../config/firebaseInit')

router.get('/developers', async (req, res) => {
  const snapshot = await firebase.developers.get()
  const records = snapshot.docs.map(doc => doc.data())
  res.status(201).send(records)
})


module.exports = router
