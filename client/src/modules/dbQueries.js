import axios from 'axios';

export const getDevs = async () => {
  let res = await axios.get('/api/firebase/devs')
  return res.data
}

export const getTasks = async () => {
  let res = await axios.get('/api/firebase/tasks')
  return res.data
}

export const addTask = async (task) => {
  let res = await axios.post('/api/firebase/tasks', {
    task
  })
  return res.data
}
