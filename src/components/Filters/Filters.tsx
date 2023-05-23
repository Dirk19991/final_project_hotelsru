import React, { useState, FC, useEffect } from 'react'
import styles from './Filters.module.scss'
import FilterSelect from '../FilterSelect/FilterSelect'
import FilterSearch from '../FilterSearch/FilterSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'next-i18next'
import RangeSlider from '../RangeSlider/RangeSlider'
import { useRouter } from 'next/router'

const Filters: FC<any> = ({ genres, yearFilter }) => {
    const { query } = useRouter()

    const ratingQuery = query.rating ? String(query.rating) : '0'
    const ratesQuery = query.rates ? String(query.rates) : '0'

    const [currentModal, setCurrentModal] = useState<string>('')
    const [ratingValue, setRatingValue] = useState<string>(ratingQuery)
    const [ratesAmountValue, setRatesAmountValue] = useState<string>(ratesQuery)

    const { t } = useTranslation(['movies'])

    return (
        <div className={styles.filters}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.selects}>
                        <FilterSelect
                            filterType="genres"
                            currentModal={currentModal}
                            setCurrentModal={setCurrentModal}
                            genres={genres}
                        />
                        <FilterSelect
                            filterType="countries"
                            currentModal={currentModal}
                            setCurrentModal={setCurrentModal}
                        />
                        <FilterSelect
                            filterType="years"
                            currentModal={currentModal}
                            setCurrentModal={setCurrentModal}
                            yearFilter={yearFilter}
                        />
                        <FilterSearch searchType="producer" />
                        <FilterSearch searchType="actor" />
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
                            title={t('ratesAmout')}
                            sliderValue={ratesAmountValue}
                            setSliderValue={setRatesAmountValue}
                            queryName={'rates'}
                            min={0}
                            max={990}
                            step={10}
                        />
                    </div>
                    <button className={styles.reset} disabled={true}>
                        <FontAwesomeIcon icon={faXmark} size="xl" />
                        <span>{t('resetFilters')}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filters
