import React, { useState, FC, useEffect } from 'react'
import styles from './Filters.module.scss'
import FilterSelect from '../FilterSelect/FilterSelect'
import FilterSearch from '../FilterSearch/FilterSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'next-i18next'
import RangeSlider from '../RangeSlider/RangeSlider'
import { useRouter } from 'next/router'
import yearFilterTitle from '@/util/yearFilterTitle'

const Filters: FC<any> = ({ allFilters, genresValue, countriesValue }) => {
    const { query, replace } = useRouter()
    const { t, i18n } = useTranslation('movies')
    const isResetDisabled = !query.genres || (Object.keys(query).length === 1 && query.genres === 'all')
    const yearTextForms = [t('allYears'), t('before'), t('year')]

    const ratingQuery = query.rating ? String(query.rating) : '0'
    const ratingsQuery = query.ratingsCount ? String(query.ratingsCount) : '0'

    const genresQuery =
        genresValue &&
        genresValue.map(({ nameEn, nameRu }: any) => (i18n.language === 'ru' ? nameRu : nameEn)).join(', ')

    const countriesQuery =
        countriesValue &&
        countriesValue.map(({ nameEn, nameRu }: any) => (i18n.language === 'ru' ? nameRu : nameEn)).join(', ')

    const [currentModal, setCurrentModal] = useState<string>('')

    const [ratingValue, setRatingValue] = useState<string>(ratingQuery)
    const [ratingsAmount, setRatingsAmount] = useState<string>(ratingsQuery)

    const resetFilters = () => {
        setRatingValue('0')
        setRatingsAmount('0')
        replace('/movies/all')
    }

    return (
        <div className={styles.filters}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.selects}>
                        <FilterSelect
                            title={t('genres')}
                            filterType="genres"
                            selectValue={query.genres === 'all' ? t('allGenres') : genresQuery}
                            currentModal={currentModal}
                            setCurrentModal={setCurrentModal}
                            list={allFilters.genres}
                        />
                        <FilterSelect
                            title={t('countries')}
                            filterType="countries"
                            selectValue={query.genres && !query.countries ? t('allCountries') : countriesQuery}
                            currentModal={currentModal}
                            setCurrentModal={setCurrentModal}
                            list={allFilters.countries}
                        />
                        <FilterSelect
                            title={t('years')}
                            filterType="years"
                            selectValue={query.genres && yearFilterTitle(query.years, yearTextForms)}
                            currentModal={currentModal}
                            setCurrentModal={setCurrentModal}
                            list={allFilters.years}
                        />
                        <FilterSearch queryName="director" />
                        <FilterSearch queryName="actor" />
                    </div>
                    <div className={styles.ranges}>
                        <RangeSlider
                            title={t('ratingFrom')}
                            sliderValue={ratingValue}
                            setSliderValue={setRatingValue}
                            queryName={'rating'}
                            min={0}
                            max={10}
                            step={0.1}
                        />
                        <RangeSlider
                            title={t('ratingsAmout')}
                            sliderValue={ratingsAmount}
                            setSliderValue={setRatingsAmount}
                            queryName={'ratingsCount'}
                            min={0}
                            max={990}
                            step={10}
                        />
                    </div>
                    <button className={styles.reset} disabled={isResetDisabled} onClick={resetFilters}>
                        <span>
                            <FontAwesomeIcon icon={faXmark} size="xl" />
                        </span>
                        <span>{t('resetFilters')}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filters
