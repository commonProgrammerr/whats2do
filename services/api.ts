import axios from 'axios'


const CRUD_URL = process.env.BASE_API_URL || 'https://61d3b366b4c10c001712ba36.mockapi.io'
const DATE_API_URL = process.env.DATE_VALIDATION_URL

export const crud_api = axios.create({
  baseURL: CRUD_URL,
})

export const date_api = axios.create({
  baseURL: DATE_API_URL
})