import axios from 'axios'

// Creates a global instance of the back-end url.
const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api