const express = require('express')
const router = express.Router()
const  firebase = require ('../config/firebaseInit')

router.get('/devs', async (req, res) => {
  const snapshot = await firebase.developers.get()
  const records = snapshot.docs.map(doc => doc.data())
  res.status(201).send(records)
})

router.post('/dev', async (req, res) => {
  const { name } = req.body
  const snapshot = await firebase.developers.where('name', '==', name).get()
  const record = snapshot.docs.map(doc => doc.data())
  res.status(201).send(record)
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

router.post('/findTasksPerDev', async (req, res) => {
  const { name } = req.body
  const snapshot = await firebase.tasks.where('dev', '==', name).where('status', '==', "ongoing").get()
  const record = snapshot.docs.map(doc => doc.data())
  res.status(201).send(record)
})

module.exports = router
