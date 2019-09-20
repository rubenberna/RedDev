const firebase = require('firebase')
const firebaseConfig = require('./firebaseConfig')
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

// Shortcuts for db collections
const developers = db.collection('developers')
const tasks = db.collection('tasks')

module.exports = {
  developers,
  tasks
}
