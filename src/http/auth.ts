import axios from 'axios'

export const API_URL = `http://193.32.203.137:4000`

const $auth = axios.create({
    //раскомментить, когда на беке будет проверка токенов
    // withCredentials: true,
    baseURL: API_URL,
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
                const response = await axios.get(`${API_URL}/refreshAccessToken`, { withCredentials: true })
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
