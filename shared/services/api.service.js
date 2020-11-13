import axios from 'axios'

const token = localStorage.getItem('token')

const baseURL = `http://eatsleepcode.ninja/api/v1/`

const createAPI = () => {
  const options = {
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
  Object.assign(options.headers, {
    'Authorization': `${token}`
  })
  return options
}

export default axios.create(createAPI())
