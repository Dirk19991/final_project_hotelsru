import axios, { AxiosRequestConfig } from 'axios'

export const API_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.DEPLOY_API_URL
        : process.env.LOCAL_API_URL

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

// $api.interceptors.request.use((config: AxiosRequestConfig) => {
//     config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });

// $api.interceptors.response.use(config => {
//     return config;
// },  async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             const res = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true});
//             localStorage.setItem('token', res.data.accessToken);
//             return $api.request(originalRequest);
//         } catch (e) {
//             console.log("Unauthorized request.");
//         }
//     }
//     throw error;
// });

export default $api
