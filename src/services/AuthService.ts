import $auth from '@/http/auth'
import parseJwt from '@/util/parseJwt'
import axios from 'axios'
import { AuthResponse, AuthError } from '@/types/Response/AuthResponse'

export default class AuthService {
    static isAuth = false
    static isAdmin = false

    static async loginOrRegister(email: string, password: string): Promise<AuthError | void> {
        try {
            const response = await $auth.post<AuthResponse>(`/login`, {
                email,
                password,
            })
            const { accessToken } = response.data
            this.setToken(accessToken)
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
            this.removeToken()
        } catch (e) {
            console.log(e)
        }
    }

    static async checkAuth() {
        try {
            const response = await axios.post<AuthResponse>(`${process.env.DEPLOY_API_URL}/refreshAccessToken`, {
                withCredentials: true,
            })
            const { accessToken } = response.data
            this.setToken(accessToken)
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
            const { accessToken } = response.data
            this.setToken(accessToken)
        } catch (e) {
            return { status: 500, message: e?.toString() }
        }
    }

    private static setToken(token: string) {
        localStorage.setItem('token', token)
        this.isAuth = true
        const data = parseJwt(token)
        if (data && data.roles.includes('admin')) {
            this.isAdmin = true
        }
    }

    private static removeToken() {
        localStorage.removeItem('token')
        this.isAuth = false
        this.isAdmin = false
    }
}
