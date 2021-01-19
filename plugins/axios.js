import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'access_token'
    )}`
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    // eslint-disable-next-line no-console
    console.error(err)
    const error = err.response
    if (error.status === 401) {
      localStorage.removeItem('access_token')
      window.location.href = window.location.origin
      // location.reload()
    }
  }
)

export default instance
