import React from 'react'
import styles from './MoviesListSkeleton.module.scss'

const MoviesListSkeleton = () => {
    return (
        <ul className={styles.skeleton}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

export default MoviesListSkeleton
