import axios from 'axios'

const json_place_holder = "https://jsonplaceholder.typicode.com"
const open_api = "https://api.publicapis.org"
const nasa = "https://api.nasa.gov/planetary"

const init = async () => {
    const api1 = axios.get(`${json_place_holder}/todos`)
    const api2 = axios.get(`${open_api}/entries`)
    const api3 = axios.get(`${nasa}/apod?api_key=YWDK3K57Ks0upzQhIazcCM5lO3x4WTFCqFinrM5I`)

    const [todos, entries, apod] = await Promise.all([
        api1, api2, api3
    ])

    console.log({
        todos_length: todos.data.length,
        entries_length: entries.data.count,
        apod_data: apod.data
    })
}

init();