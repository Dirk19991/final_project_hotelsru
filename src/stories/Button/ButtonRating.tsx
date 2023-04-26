import React from 'react'
import styles from './ButtonRating.module.scss'

export interface ButtonRatingProps {
    width: number
    height: number
    fontSize: number
    rating: number
}

export const ButtonRating = ({
    width,
    height,
    fontSize,
    rating,
}: ButtonRatingProps) => {
    return (
        <div
            style={{ width: width, height: height }}
            className={styles.button}
        >
            <div
                style={{ fontSize: `${fontSize}px` }}
                className={styles.rating}
            >
                {rating}
            </div>
        </div>
    )
}
