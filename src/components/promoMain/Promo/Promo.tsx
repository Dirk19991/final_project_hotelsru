import { useState } from 'react'
import styles from './Promo.module.scss'

import { useTranslation } from 'next-i18next'

const Promo = () => {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation(['promo'])

    return (
        <div className="container">
            <div className={styles.promo}>
                <h4 className={styles.header}>{t('onlineCinema')}</h4>
                {!open && (
                    <div className={styles.text}>
                        <p className={styles.ellipsis}>{t('everyDay')}</p>
                    </div>
                )}
                {open && (
                    <div className={styles.text}>
                        <p>{t('everyDay')}</p>
                        <p>{t('videoLibrary')}</p>
                        <p>{t('onlineCinemaIvi')}</p>
                        <ul className={styles.list}>
                            <li>
                                {' '}
                                <span> {t('uniqueRecommendation')}</span>
                            </li>
                            <li>
                                {' '}
                                <span>{t('oneTouch')}</span>
                            </li>
                            <li>
                                {' '}
                                <span> {t('opportunityToDownload')}</span>
                            </li>
                            <li>
                                {' '}
                                <span> {t('uniqueConditions')}</span>
                            </li>
                            <li>
                                {' '}
                                <span> {t('advancedNotification')}</span>
                            </li>
                            <li>
                                {' '}
                                <span>{t('opportunityToAdd')}</span>
                            </li>
                            <li>
                                {' '}
                                <span>{t('content')}</span>
                            </li>
                            <li>
                                {' '}
                                <span> {t('watchingOnlineContent')}</span>
                            </li>
                        </ul>
                        <p>{t('discoverOpportunity')}</p>
                    </div>
                )}

                <button
                    className={styles.button}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? t('hide') : t('expand')}
                </button>
            </div>
        </div>
    )
}

export default Promo
