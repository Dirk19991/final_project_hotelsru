import React from 'react'
import styles from './MoviesListSkeleton.module.scss'

const MoviesListSkeleton = () => {
    return (
        <div className={styles.skeleton}>
            <div className="container">
                <ul className={styles.list}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default MoviesListSkeleton
