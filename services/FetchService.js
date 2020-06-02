import axios from 'axios'
const apiKey = process.env.API_KEY

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  searchMovies(term) {
    return apiClient.get(`?s=${term}&type=movie&apikey=${apiKey}&`)
  }
}
