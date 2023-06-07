import { FC, ReactNode, useContext, useEffect, useState } from 'react'
import AuthContext from '@/types/Component/Context'
import styles from './AdminLayout.module.scss'

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
    const { isAdmin } = useContext(AuthContext)

    return (
        <>
            {!isAdmin && <h1 className={styles.title}>Нет доступа</h1>}
            {isAdmin && children}
        </>
    )
}

export default AdminLayout
