import React, { useState } from 'react'
import FooterNavigation from '../FooterNavigation/FooterNavigation'
import FooterContacts from '../FooterContacts/FooterContacts'
import FooterMobile from '../FooterMobile/FooterMobile'
import useMediaQuery from '@/hooks/useMediaQuery'
import styles from './Footer.module.scss'
import { useRouter } from 'next/router'

const Footer = () => {
    const matchesDesktopSize = useMediaQuery('(min-width: 1160px)')
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const { push } = useRouter()

    return (
        <footer className={styles.footer}>
            {!matchesDesktopSize && <FooterMobile />}
            {matchesDesktopSize && (
                <div className="container">
                    <FooterNavigation />
                    {isLoggedIn && (
                        <button
                            className={styles.admin}
                            onClick={() => push('/admin')}
                        >
                            Админ-панель
                        </button>
                    )}
                    <FooterContacts />
                </div>
            )}
        </footer>
    )
}

export default Footer
