import axios from "axios";

export default axios.create({
    baseURL: process.env.API_URL || 'http://127.0.0.1:8000/' ,
    responseType: "json",
    timeout: 5000
});
