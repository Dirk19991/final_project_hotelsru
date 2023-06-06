import $auth from '@/http/auth'
import axios from 'axios'
import { AuthResponse, AuthError } from '@/types/Response/AuthResponse'

export default class AuthService {
    static async login(email: string, password: string): Promise<AuthError | void> {
        try {
            const response = await $auth.post<AuthResponse>(`/login`, {
                email,
                password,
            })
            localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            if (axios.isAxiosError(e)) {
                const code = e?.response?.data?.statusCode
                if (code === 404) {
                    return this.register(email, password)
                }
                return { status: code, message: e?.response?.data?.message }
            }

            return { status: 500, message: e?.toString() }
        }
    }

    static async logout(): Promise<void> {
        try {
            await $auth.post('/logout')
            localStorage.removeItem('token')
        } catch (e) {
            console.log(e)
        }
    }

    static async checkAuth() {
        try {
            const response = await axios.post<AuthResponse>(`${process.env.DEPLOY_API_URL}/refreshAccessToken`, {
                withCredentials: true,
            })
            localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            console.log(e)
        }
    }

    static async authVK() {
        try {
            const response = await axios.get(`${process.env.DEPLOY_API_URL}/oauth/vk`, {
                withCredentials: true,
            })
            localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            console.log(e)
        }
    }

    static async authGoogle() {
        try {
            const response = await axios.get(`${process.env.DEPLOY_API_URL}/oauth/google`, {
                withCredentials: true,
            })
            localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            console.log(e)
        }
    }

    private static async register(email: string, password: string): Promise<AuthError | void> {
        try {
            await $auth.post<AuthResponse>(`/registration`, {
                email,
                password,
            })
            const response = await $auth.post<AuthResponse>(`/login`, {
                email,
                password,
            })
            localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            return { status: 500, message: e?.toString() }
        }
    }
}
