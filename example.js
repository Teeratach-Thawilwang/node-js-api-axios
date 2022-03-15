import Placeholder from "./classes/placeholder.js";
import OpenAPI from "./classes/OpenAPIs.js";
import NASA from "./classes/nasa.js";

const init = async () => {
    const placeholder = new Placeholder();
    const openAPI = new OpenAPI();
    const nasa = new NASA('YWDK3K57Ks0upzQhIazcCM5lO3x4WTFCqFinrM5I');

    const [todos, entries, apod] = await Promise.all([
        placeholder.getTodos(),
        openAPI.getEntries(),
        nasa.getData(),
    ])

    console.log({
        todos_length: todos.data.length,
        entries_length: entries.data.count,
        apod_data: apod.data
    })
}

init();