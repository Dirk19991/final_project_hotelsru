import React from 'react'
import styles from './HeaderMoviesCarousel.module.scss'
import data from '@/data/mockData'
import Image from 'next/image'
import Link from 'next/link'

const HeaderMoviesCarousel = () => {
    const sliceStep = Math.floor(data.length / 3)
    const movies1 = data.slice(0, sliceStep + 1)
    const movies2 = data.slice(sliceStep + 2, (sliceStep + 1) * 2)
    const movies3 = data.slice((sliceStep + 1) * 2 + 1)

    return (
        <div className={styles.carousel}>
            <div className={styles.wrapper}>
                {[movies1, movies2, movies3].map((list, idx) => {
                    return (
                        <div className={styles.column} key={idx}>
                            {list.map((movie) => {
                                return (
                                    <Link
                                        href={`/watch/${movie.id}`}
                                        key={movie.id}
                                    >
                                        <Image
                                            src={movie.poster}
                                            alt={movie.description}
                                            width={112}
                                            height={160}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HeaderMoviesCarousel
