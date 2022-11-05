import axios from 'axios'

const httpRequest = (verb, endpoint, data, headers = {}) => {
  const config = {
    headers,
  }

  const {token} = JSON.parse(localStorage.getItem('alkybank'))

  if (token) config.headers.Authorization = `Bearer ${token}`

  config.method = verb

  config.url = import.meta.env.VITE_API_URL + endpoint

  if (data) config.data = data

  return new Promise((resolve, reject) => {
    axios(config)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })
}

// handle get requests
/**
 * @param {string} endpoint
 * @param {object} headers
 * @returns {Promise}
 *
 * This function is used to handle get requests, receives the endpoint and the headers,
 * if not headers are passed, then the headers object is setted to {}
 * if token exist in localStorage, then add it to headers
 */
export const getRequest = (endpoint, headers) => httpRequest('get', endpoint, null, headers)

// handle post requests
/**
 * @param {string} endpoint
 * @param {object} data
 * @param {object} headers
 * @returns {Promise}
 *
 * this function is used to handle post requests, receives the endpoint, data and headers,
 * if not headers are passed, then the headers object is setted to {}
 * if token exist in localStorage, then add it to headers
 */
export const postRequest = (endpoint, data, headers) => httpRequest('post', endpoint, data, headers)

// handle put requests
/**
 * @param {string} endpoint
 * @param {object} data
 * @param {object} headers
 * @returns {Promise}
 *
 * this function is used to handle put requests, receives the endpoint, data and headers,
 * if not headers are passed, then the headers object is setted to {}
 * if token exist in localStorage, then add it to headers
 */
export const putRequest = (endpoint, data, headers) => httpRequest('put', endpoint, data, headers)

/**
 * @param {string} endpoint
 * @param {object} headers
 * @returns {Promise}
 *
 * this function is used to handle delete requests, receives the endpoint, data and headers,
 * if not headers are passed, then the headers object is setted to {}
 * if token exist in localStorage, then add it to headers
 */
export const deleteRequest = (endpoint, headers) => httpRequest('delete', endpoint, null, headers)
