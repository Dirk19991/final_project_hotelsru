import { createContext } from 'react'

const AuthContext = createContext({
    isAuth: false,
    setIsAuth: (auth: boolean) => {},
    isAdmin: false,
    setIsAdmin: (auth: boolean) => {},
})

export default AuthContext
