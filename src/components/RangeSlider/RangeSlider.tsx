import React, { FC } from 'react'
import styles from './RangeSlider.module.scss'
import { useRouter } from 'next/router'

interface RangeSlider {
    title: string
    sliderValue: string
    min: number
    max: number
    step: number
    queryName: string
    setSliderValue: (value: string) => void
}

const RangeSlider: FC<RangeSlider> = ({ title, sliderValue, setSliderValue, min, max, step, queryName }) => {
    const { query, replace } = useRouter()

    const inputChangeHandler = () => {
        const genres = query.genres ?? 'all'
        const pathname = '/movies/[genres]'
        const pathnameCopy = `/movies/${genres}`
        const queryCopy = Object.assign({}, query)
        delete queryCopy.genres

        if (sliderValue === '0') {
            delete queryCopy[queryName]
            delete query[queryName]

            const path = { pathname, query: { ...query, genres } }
            const as = { pathname: pathnameCopy, query: { ...queryCopy } }
            const config = { shallow: true }

            replace(path, as, config)
        }

        if (sliderValue !== '0') {
            const path = { pathname, query: { ...query, [queryName]: sliderValue, genres } }
            const as = { pathname: pathnameCopy, query: { ...queryCopy, [queryName]: sliderValue } }
            const config = { shallow: true }

            replace(path, as, config)
        }
    }

    return (
        <div className={styles.range}>
            <p>{title}</p>
            <div className={styles.input}>
                <input
                    type="range"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
                    onMouseUp={inputChangeHandler}
                    min={min}
                    max={max}
                    step={step}
                />
                <span>{sliderValue}</span>
            </div>
        </div>
    )
}

export default RangeSlider
