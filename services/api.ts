import axios from 'axios'


const CRUD_URL = process.env.BASE_API_URL
const DATE_API_URL = process.env.DATE_VALIDATION_URL

export const crud_api = axios({
  baseURL: CRUD_URL,
})

export const date_api = axios({
  baseURL: DATE_API_URL
})