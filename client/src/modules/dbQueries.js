import axios from 'axios';

export const getDevs = async () => {
  let res = await axios.get('/api/firebase/devs')
  return res.data
}
