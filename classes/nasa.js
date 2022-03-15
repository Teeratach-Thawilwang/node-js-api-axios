import axios from 'axios'

class NASA {
    constructor(API_KEY) {
        const baseURL = "https://api.nasa.gov/planetary"
        this.axios = axios.create({
            baseURL,
            timeout: 10000,
            params: {
                api_key: API_KEY
            }
        })
    }

    getData() {
        return this.axios.get('/apod?')
    }
}

export default NASA