import Axios from 'axios'
import { baseURL } from '../env'


export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const componentApi = Axios.create({
  baseURL: 'https://zylalabs.com/api/1126/the+components+finder+api/',
  headers: { 
    'Authorization': 'Bearer 1390|YGHOceSJJTXYkzcSh0tVxfB6hWhBcnurYS4zPhu1'
    }
})

// case fans endpoint
// GET https://zylalabs.com/api/1126/the+components+finder+api/989/list+of+case+fans

// power supply endpoint
// GET https://zylalabs.com/api/1126/the+components+finder+api/990/list+of+power+supplies
     






api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  }else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]',error.message)
  }
  return Promise.reject(error)
}
