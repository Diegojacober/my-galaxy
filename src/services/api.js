import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.nasa.gov'
})

// api.defaults.params = {}

export default api;