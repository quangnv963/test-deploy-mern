import axios from "axios";

const instance = axios.create({
    baseURL: 'https://test-deploy-mern-omega.vercel.app/api/',
    timeout:1000,
    headers:{"Content-Type":"application/json",}
})


export default instance