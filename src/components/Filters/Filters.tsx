import React, { useState, FC } from 'react'
import styles from './Filters.module.scss'
import FilterSelect from '../FilterSelect/FilterSelect'
import FilterSearch from '../FilterSearch/FilterSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useI18nContext } from '@/context/i18n'

const Filters: FC<any> = () => {
    const [currentModal, setCurrentModal] = useState<string>('')
    const [ratingValue, setRatingValue] = useState<string>('0')
    const [ratesAmountValue, setRatesAmountValue] = useState<string>('0')

    const { language, i18n } = useI18nContext()

    return (
        <div className={styles.filters}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.selects}>
                        <FilterSelect
                            filterType="genres"
                            currentModal={currentModal}
                            setCurrentModal={setCurrentModal}
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
                        />
                        <FilterSearch searchType="producer" />
                        <FilterSearch searchType="actor" />
                    </div>
                    <div className={styles.ranges}>
                        <div className={styles.range}>
                            <p>{i18n[language].ratingFrom}</p>
                            <input
                                type="range"
                                value={ratingValue}
                                onChange={(e) => setRatingValue(e.target.value)}
                                min="0"
                                max="10"
                                step="0.1"
                            />
                            <span>{ratingValue}</span>
                        </div>
                        <div className={styles.range}>
                            <p>{i18n[language].numberOfRatings}</p>
                            <input
                                type="range"
                                value={ratesAmountValue}
                                onChange={(e) =>
                                    setRatesAmountValue(e.target.value)
                                }
                                min="0"
                                max="1000"
                                step="10"
                            />
                            <span>{ratesAmountValue}</span>
                        </div>
                    </div>
                    <button className={styles.reset} disabled={true}>
                        <div>
                            <FontAwesomeIcon icon={faXmark} size="xl" />
                        </div>
                        <span>{i18n[language].resetFilters}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filters
