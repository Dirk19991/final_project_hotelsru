import React, { useState } from 'react'
import styles from './MoviesTitle.module.scss'
import { useI18nContext } from '@/context/i18n'

const MoviesHead = () => {
    const [isOpen, toggleIsOpen] = useState(false)
    const { language, i18n } = useI18nContext()

    return (
        <section className={styles.moviesHead}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2>{i18n[language].watchMoviesOnline}</h2>
                    {!isOpen && (
                        <div className={styles.title}>
                            <p className={styles.ellipsis}>
                                {i18n[language].doYouLikeWatching}
                            </p>
                        </div>
                    )}
                    {isOpen && (
                        <div className={styles.title}>
                            <p>{i18n[language].doYouLikeWatching}</p>
                            <p>{i18n[language].theSelectionOfFilms}</p>
                            <p>{i18n[language].inOurCatalog}</p>
                            <p>{i18n[language].ifYouAreInterested}</p>
                            <p>{i18n[language].doNotMiss}</p>
                        </div>
                    )}
                    <button
                        onClick={() => toggleIsOpen((state) => !state)}
                        className={styles.button}
                    >
                        {isOpen ? i18n[language].hide : i18n[language].expand}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MoviesHead
