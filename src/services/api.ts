import axios from "axios";

export const api = axios.create({
    baseURL:'Http://localhost:3000/api',
})