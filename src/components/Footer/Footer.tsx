import React from 'react'
import FooterNavigation from '../FooterNavigation/FooterNavigation'
import FooterContacts from '../FooterContacts/FooterContacts'
import FooterMobile from '../FooterMobile/FooterMobile'
import useMediaQuery from '@/hooks/useMediaQuery'
import styles from './Footer.module.scss'

const Footer = () => {
    const matchesDesktopSize = useMediaQuery('(min-width: 1160px)')

    return (
        <footer className={styles.footer}>
            {!matchesDesktopSize && <FooterMobile />}
            {matchesDesktopSize && (
                <div className="container">
                    <FooterNavigation />
                    <FooterContacts />
                </div>
            )}
        </footer>
    )
}

export default Footer
