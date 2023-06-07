import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './AdminLayout.module.scss'
import parseJwt from '@/util/parseJwt'

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const data = parseJwt(localStorage.getItem('token') || '')
        setIsAdmin(data?.roles.includes('ADMIN') || false)
    }, [])

    return (
        <>
            {!isAdmin && <h1 className={styles.title}>Нет доступа</h1>}
            {isAdmin && children}
        </>
    )
}

export default AdminLayout
