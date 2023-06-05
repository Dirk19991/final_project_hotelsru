import React, { useState, FC } from 'react'
import styles from './PromoMovies.module.scss'
import { useTranslation } from 'next-i18next'
import yearFilterTitle from '@/util/yearFilterTitle'
import { useRouter } from 'next/router'
import { Genre, Country } from '@/types/Response/MovieResponse'

interface IPromoMovies {
    isActive: boolean
    genresValue?: Genre[]
    countriesValue?: Country[]
}

const PromoMovies: FC<IPromoMovies> = ({ isActive, genresValue, countriesValue }) => {
    const { t, i18n } = useTranslation('movies')
    const [isOpen, toggleIsOpen] = useState(false)
    const yearTextForms = [t('allYears'), t('before'), t('year')]
    const { query } = useRouter()

    const genresQuery =
        genresValue &&
        genresValue.map(({ nameEn, nameRu }: Genre) => (i18n.language === 'ru' ? nameRu : nameEn)).join(', ')

    const countriesQuery =
        countriesValue &&
        countriesValue.map(({ nameEn, nameRu }: Country) => (i18n.language === 'ru' ? nameRu : nameEn)).join(', ')

    const genresString = query.genres === 'all' ? t('allGenres') : genresQuery
    const countriesString = query.genres && !query.countries ? t('allCountries') : countriesQuery
    const yearsString = yearFilterTitle(query.years, yearTextForms)
    const ratingString = query.rating ? `, ${t('ratingAbove')} ${query.rating}` : ''
    const ratingAmountString = query.ratingsCount
        ? `, ${t('amountOfRatingsMore')} ${query.ratingsCount} ${t('thousand')}`
        : ''

    return (
        <section className={styles.moviesHead}>
            <div className="container">
                <div className={styles.wrapper}>
                    {isActive && (
                        <div className={styles.activeTitle}>
                            <h2>{t('movies')}</h2>
                            <p>
                                {genresString}, {countriesString}, {yearsString}
                                {ratingString}
                                {ratingAmountString}
                            </p>
                        </div>
                    )}
                    {!isActive && (
                        <>
                            <h2>{t('watchMoviesOnline')}</h2>
                            {!isOpen && (
                                <div className={styles.title}>
                                    <p className={styles.ellipsis}>{t('doYouLikeWatching')}</p>
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
                            <button onClick={() => toggleIsOpen((state) => !state)} className={styles.button}>
                                {isOpen ? `${t('collapse')}` : `${t('expand')}`}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PromoMovies
