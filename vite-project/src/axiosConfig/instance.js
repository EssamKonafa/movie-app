import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/",

    //authentication key
    params: {
        api_key: "55e2b473c23bed549a6f0f3b59a9429f"
    }
})

export default instance