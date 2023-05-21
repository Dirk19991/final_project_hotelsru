import React, { useState } from 'react'
import styles from './MoviesTitle.module.scss'
import { useTranslation } from 'next-i18next'

const MoviesHead = () => {
    const { t } = useTranslation(['movies', 'common'])
    const [isOpen, toggleIsOpen] = useState(false)

    return (
        <section className={styles.moviesHead}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2>{t('watchMoviesOnline')}</h2>
                    {!isOpen && (
                        <div className={styles.title}>
                            <p className={styles.ellipsis}>
                                {t('doYouLikeWatching')}
                            </p>
                        </div>
                    )}
                    {isOpen && (
                        <div className={styles.title}>
                            <p>{t('doYouLikeWatching')}</p>
                            <p>{t('theSelectionOfFilms')}</p>
                            <p>{t('inOurCatalog')}</p>
                            <p>{t('ifYouAreInterested')}</p>
                            <p>{t('doNotMiss')}</p>
                        </div>
                    )}
                    <button
                        onClick={() => toggleIsOpen((state) => !state)}
                        className={styles.button}
                    >
                        {isOpen ? `${t('collapse')}` : `${t('expand')}`}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MoviesHead
