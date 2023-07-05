import axios from 'axios';

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "Aplication/json",
    }
})

export default blogFetch;