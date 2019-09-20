const express = require('express')
const router = express.Router()
const  firebase = require ('../config/firebaseInit')

router.get('/devs', async (req, res) => {
  const snapshot = await firebase.developers.get()
  const records = snapshot.docs.map(doc => doc.data())
  res.status(201).send(records)
})

router.get('/tasks', async (req, res) => {
  const snapshot = await firebase.tasks.get()
  const records = snapshot.docs.map(doc => doc.data())
  res.status(201).send(records)
})

router.post('/tasks', async (req, res) => {
  const { task } = req.body
  firebase.tasks.add({...task})
  res.status(201).send(`Task ${task.title} saved`)
})

module.exports = router
