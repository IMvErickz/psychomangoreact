import  axios  from "axios";

export const api = axios.create({
    baseURL: "https://psychoserver-imverickz.vercel.app"
    //baseURL: 'http://localhost:3838'
})
//us-east.connect.psdb.cloud