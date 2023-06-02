export interface AuthError {
    status: number
    message?: string
}

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    user: IUser
}

export interface IUser {
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