import { useState } from 'react'
import styles from './Promo.module.scss'
import { useI18nContext } from '@/context/i18n'

const Promo = () => {
    const [open, setOpen] = useState(false)
    const { i18n, language } = useI18nContext()

    return (
        <div className="container">
            <div className={styles.promo}>
                <h4 className={styles.header}>{i18n[language].onlineCinema}</h4>
                {!open && (
                    <div className={styles.text}>
                        <p className={styles.ellipsis}>
                            {i18n[language].everyDay}
                        </p>
                    </div>
                )}
                {open && (
                    <div className={styles.text}>
                        <p>{i18n[language].everyDay}</p>
                        <p>{i18n[language].videoLibrary}</p>
                        <p>{i18n[language].onlineCinemaIvi}</p>
                        <ul className={styles.list}>
                            <li>
                                {' '}
                                <span>
                                    {' '}
                                    {i18n[language].uniqueRecommendation}
                                </span>
                            </li>
                            <li>
                                {' '}
                                <span>{i18n[language].oneTouch}</span>
                            </li>
                            <li>
                                {' '}
                                <span>
                                    {' '}
                                    {i18n[language].opportunityToDownload}
                                </span>
                            </li>
                            <li>
                                {' '}
                                <span> {i18n[language].uniqueConditions}</span>
                            </li>
                            <li>
                                {' '}
                                <span>
                                    {' '}
                                    {i18n[language].advancedNotification}
                                </span>
                            </li>
                            <li>
                                {' '}
                                <span>{i18n[language].opportunityToAdd}</span>
                            </li>
                            <li>
                                {' '}
                                <span>{i18n[language].content}</span>
                            </li>
                            <li>
                                {' '}
                                <span>
                                    {' '}
                                    {i18n[language].watchingOnlineContent}
                                </span>
                            </li>
                        </ul>
                        <p>{i18n[language].discoverOpportunity}</p>
                    </div>
                )}

                <button
                    className={styles.button}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? i18n[language].hide : i18n[language].expand}
                </button>
            </div>
        </div>
    )
}

export default Promo
