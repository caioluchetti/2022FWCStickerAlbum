import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://figurinhasapp.herokuapp.com/",
    timeout: 10000
})

export default axios