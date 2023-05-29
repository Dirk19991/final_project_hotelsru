import $auth from '@/http/auth'
import axios from 'axios'

export interface AuthError {
    status: number
    message?: string
}

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    user: IUser
}

interface IUser {
    firstName?: string
    lastName?: string
    phone?: string
    login?: string
    id: number
    password: string
    email: string
    isActivated: boolean
    activationLink?: string
}

export default class AuthService {
    static isAuth = false

    static async loginOrRegister(email: string, password: string): Promise<AuthError | void> {
        try {
            const response = await $auth.post<AuthResponse>(`/profile/login`, {
                email,
                password,
            })
            localStorage.setItem('token', response.data.accessToken)
            this.isAuth = true
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
            await $auth.post('/profile/logout')
            localStorage.removeItem('token')
            this.isAuth = false
        } catch (e) {
            console.log(e)
        }
    }

    static async checkAuth() {
        //todo refresh
        const token = localStorage.getItem('token')
        if (token) {
            this.isAuth = true
        }
    }

    private static async register(email: string, password: string): Promise<AuthError | void> {
        try {
            await $auth.post<AuthResponse>(`/profile/registration`, {
                email,
                password,
            })
            const response = await $auth.post<AuthResponse>(`/profile/login`, {
                email,
                password,
            })
            localStorage.setItem('token', response.data.accessToken)
            this.isAuth = true
        } catch (e) {
            return { status: 500, message: e?.toString() }
        }
    }
}
