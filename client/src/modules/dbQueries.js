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

export const findDev = async (name) => {
  let res = await axios.post('/api/firebase/dev', {
    name
  })
  return res.data
}

export const findTasksPerDev = async (name) => {
  let res = await axios.post('/api/firebase/findTasksPerDev', {
    name
  })
  return res.data
}
