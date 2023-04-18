import React, { useState } from 'react'
import styles from './SlideSmall.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookmark,
    faWandMagicSparkles,
    faStar,
    faBan,
} from '@fortawesome/free-solid-svg-icons'
import { genresArr } from '@/components/Filters/Filters'

export interface ISlideSmall {
    image: string
    href: string
    year: number
    rating: string
    country: {
        id: number
        name: string
    }[]
    genre: {
        id: number
        name: string
    }[]
}

export const SlideSmall = ({
    image,
    href,
    year,
    rating,
    country,
    genre,
}: ISlideSmall) => {
    const [imageHovered, setImageHovered] = useState(false)
    const [bookmarkHovered, setBookmarkHovered] = useState(false)
    const [similarHovered, setSimilarHovered] = useState(false)
    const [starHovered, setStarHovered] = useState(false)
    const [dislikeHovered, setDislikeHovered] = useState(false)

    return (
        <Link href={href}>
            <div
                onMouseLeave={() => setImageHovered(false)}
                onMouseEnter={() => setImageHovered(true)}
                className={styles.imageContainer}
                style={{ zIndex: imageHovered ? 100 : 1 }}
            >
                <Image
                    className={styles.image}
                    fill
                    alt="mainImage"
                    src={image}
                    style={{
                        filter: imageHovered
                            ? 'brightness(0.4)'
                            : 'brightness(1)',
                    }}
                ></Image>

                <div
                    style={{
                        opacity: imageHovered ? '1' : '0',
                    }}
                    className={styles.info}
                >
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                onMouseLeave={() => setBookmarkHovered(false)}
                                onMouseEnter={() => setBookmarkHovered(true)}
                                size="lg"
                                icon={faBookmark}
                            />
                            <div
                                style={{
                                    opacity: bookmarkHovered ? '1' : '0',
                                }}
                                className={styles.message}
                            >
                                Смотреть позже
                                <div className={styles.triangle}></div>
                            </div>
                        </div>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                onMouseLeave={() => setSimilarHovered(false)}
                                onMouseEnter={() => setSimilarHovered(true)}
                                size="lg"
                                icon={faWandMagicSparkles}
                            />
                            <div
                                style={{
                                    visibility: similarHovered
                                        ? 'visible'
                                        : 'hidden',
                                }}
                                className={styles.message}
                            >
                                Похожее
                                <div className={styles.triangle}></div>
                            </div>
                        </div>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                onMouseLeave={() => setStarHovered(false)}
                                onMouseEnter={() => setStarHovered(true)}
                                size="lg"
                                icon={faStar}
                            />
                            <div
                                style={{
                                    visibility: starHovered
                                        ? 'visible'
                                        : 'hidden',
                                }}
                                className={styles.message}
                            >
                                Уже смотрел, оценить
                                <div className={styles.triangle}></div>
                            </div>
                        </div>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                onMouseLeave={() => setDislikeHovered(false)}
                                onMouseEnter={() => setDislikeHovered(true)}
                                size="lg"
                                icon={faBan}
                            />
                            <div
                                style={{
                                    visibility: dislikeHovered
                                        ? 'visible'
                                        : 'hidden',
                                }}
                                className={styles.message}
                            >
                                Не нравится такое
                                <div className={styles.triangle}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rating}>
                        {parseFloat(rating).toFixed(2)}
                    </div>
                    <div className={styles.bottomInfo}>
                        {year}, {country[0].name}, {genre[0].name}
                    </div>
                </div>
            </div>
        </Link>
    )
}
