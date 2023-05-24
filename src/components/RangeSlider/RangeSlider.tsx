import React, { FC } from 'react'
import styles from './RangeSlider.module.scss'
import { useRouter } from 'next/router'

const RangeSlider: FC<any> = ({ title, sliderValue, setSliderValue, min, max, step, queryName }) => {
    const { query, push } = useRouter()

    const inputChangeHandler = () => {
        // const genres = query.genres ?? 'all'
        // const pathname = '/movies/[genres]'

        // if (sliderValue === '0') {
        //     delete query[queryName]
        //     push({
        //         pathname,
        //         query: { ...query },
        //     })
        // }

        // if (sliderValue !== '0') {
        //     push({
        //         pathname,
        //         query: {
        //             ...query,
        //             [queryName]: sliderValue,
        //         },
        //     })
        // }
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
