interface JwtData {
    email: string
    exp: number
    iat: number
    roles: string[]
    userId: number
}

export default function parseJwt(token: string): JwtData | null {
    if (!token) {
        return null
    }
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
}
