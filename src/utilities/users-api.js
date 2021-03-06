import { getToken } from './users-service';

// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData)
}

export async function login(credentials) {
 return sendRequest(`${BASE_URL}/login`, "POST", credentials)
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = "get", payload = null) {
  const options = { method }
  if (payload) {
    options.headers = {"Content-type": "application/json"}
    options.body = JSON.stringify(payload)
  }
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  
  const res = await fetch(url, options)
  if (res.ok) return res.json()
  throw new Error("Bad Request")
}