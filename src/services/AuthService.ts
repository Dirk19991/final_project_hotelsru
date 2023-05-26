import $auth, { API_URL } from '@/http/auth'
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
    firstName: string
    lastName: string
    phone: string
    login: string
    password: string
    email: string
}

export default class AuthService {
    static isAuth = false

    static async loginOrRegister(email: string, password: string): Promise<AuthError | void> {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/profile/login`, {
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
            //раскоментить, когда на беке будет проверка токенов
            // const response = await $auth.post('/profile/logout')
            const response = await axios.post(`${API_URL}/profile/logout`)
            localStorage.removeItem('token')
            this.isAuth = false
        } catch (e) {
            console.log(e)
        }
    }

    private static async register(email: string, password: string): Promise<AuthError | void> {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/profile/registration`, {
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
