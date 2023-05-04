import React, { useState } from 'react'
import FooterNavigation from '../FooterNavigation/FooterNavigation'
import FooterContacts from '../FooterContacts/FooterContacts'
import FooterMobile from '../FooterMobile/FooterMobile'
import useMediaQuery from '@/hooks/useMediaQuery'
import styles from './Footer.module.scss'
import { useRouter } from 'next/router'
import { Button } from '@/stories/Button/ButtonStandard'

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
                        <Button
                            type="showMore"
                            label="Админ-панель"
                            onClick={() => push('/admin')}
                        />
                    )}
                    <FooterContacts />
                </div>
            )}
        </footer>
    )
}

export default Footer
