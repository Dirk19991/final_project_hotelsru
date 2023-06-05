import axios from 'axios'

const baseURL = process.env.DEPLOY_API_URL

const $auth = axios.create({
    withCredentials: true,
    baseURL,
})

$auth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$auth.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response.status == 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
                const response = await axios.post(`${process.env.DEPLOY_API_URL}/profile/refreshAccessToken`)
                localStorage.setItem('token', response.data.accessToken)
                return $auth.request(originalRequest)
            } catch (e) {
                console.log(e)
            }
        }
        throw error
    }
)

const $apiWithCredentials = axios.create({
    withCredentials: true,
    baseURL,
})

const $api = axios.create({
    baseURL,
})

export { $auth, $api, $apiWithCredentials }
