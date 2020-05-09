import axios from "axios";

export default axios.create({
    baseURL: 'https://yummi-pizza-server.herokuapp.com/',
    responseType: "json",
    timeout: 5000
});
