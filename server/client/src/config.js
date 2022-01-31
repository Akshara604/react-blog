import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://thoughts-a-blog.herokuapp.com/api/"
})