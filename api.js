import axios from "axios";


// const API = `http://localhost:3000` || '/api'

const API = window.location.hostname == "localhost" ? `http://localhost:3000` : "/api"
alert(API)

// let API = `/api`
// let API = `http://localhost:3000`


export const api = axios.create({
    baseURL: API,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
})