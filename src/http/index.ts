import axios, { AxiosRequestConfig } from 'axios'

export const API_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.DEPLOY_API_URL
        : process.env.LOCAL_API_URL

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

export default $api
