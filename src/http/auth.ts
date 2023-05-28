import axios from 'axios'

const $auth = axios.create({
    //раскомментить, когда на беке будет проверка токенов
    // withCredentials: true,
    baseURL: process.env.DEPLOY_API_URL,
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
                const response = await axios.get(`${process.env.DEPLOY_API_URL}/refreshAccessToken`, {
                    withCredentials: true,
                })
                localStorage.setItem('token', response.data.accessToken)
                return $auth.request(originalRequest)
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН')
            }
        }
        throw error
    }
)

export default $auth
