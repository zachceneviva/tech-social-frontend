import axios from "axios";

async function handleRequest(apiCall) {
  try {
    let response = await apiCall
    return response
  } catch (e) {
    console.log(e)
  }
}

/**
 * get api call
 * @param {String} endpoint 
 * @param {String} params - String passed as query param, typically an id 
 * @param {Boolean} auth - send headers in req
 */
export function getApiRequest(endpoint, params, auth=false) {
    let url = process.env.REACT_APP_API + endpoint
    if(params) {
      url +=(`/${params}`)
    }
    if (auth) {
      return handleRequest(
        axios.get(url,
          {
            headers: {authorization: `Bearer ${localStorage.uid}`}  
          }
        )
      )
    } else {
    return handleRequest(
      axios.get(url)
    )
    }
}

/**
 * post api call
 * @param {String} endpoint 
 * @param {Object} params - object of data sent in post request
 */
export function postApiRequest(endpoint, params) {
    let url = process.env.REACT_APP_API + endpoint
    return handleRequest (
      axios.post(
        url,
        params
      )
    )
}

/**
 * put api call
 * @param {String} endpoint 
 * @param {String} id 
 * @param {Object} params 
 */
export async function putApiRequest(endpoint, id, params) {
  let url = process.env.REACT_APP_API + endpoint + '/' + id
  return handleRequest(
    axios.put(
      url,
      params,
      {
        headers: {authorization: `Bearer ${localStorage.uid}`},
      }
    )
  )
}
