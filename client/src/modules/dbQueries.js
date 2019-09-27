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

export const finishTask = async (task) => {
  let res = await axios.post('/api/firebase/finishTask', {
    task
  })
  return res.data
}

export const assignTask = async (taskObj) => {
  let res = await axios.post('/api/firebase/assignTask', {
    taskObj
  })
  return res.data
}

export const fetchLogs = async (id) => {
  console.log(id);
  let res = await axios.post('/api/firebase/fetchLogs', {id})
  return res.data
}
