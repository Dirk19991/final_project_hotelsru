import { Context, Dispatch, SetStateAction, createContext } from 'react'

interface AuthContextData {
    isAuth: boolean
    isAdmin: boolean
    setIsAuth: Dispatch<SetStateAction<boolean>>
    setIsAdmin: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextData | null>(null)
