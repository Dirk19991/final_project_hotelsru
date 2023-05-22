import React, { FC } from 'react'
import styles from './RangeSlider.module.scss'

const RangeSlider: FC<any> = ({
    title,
    sliderValue,
    setSliderValue,
    min,
    max,
    step,
}) => {
    return (
        <div className={styles.range}>
            <p>{title}</p>
            <div className={styles.input}>
                <input
                    type="range"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
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
