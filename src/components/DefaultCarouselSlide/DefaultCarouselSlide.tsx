import React, { useState, FC } from 'react'
import styles from './DefaultCarouselSlide.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookmark,
    faWandMagicSparkles,
    faStar,
    faBan,
} from '@fortawesome/free-solid-svg-icons'

export interface IDefaultCarousel {
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
    name: string
}

const DefaultCarouselSlide: FC<IDefaultCarousel> = ({
    image,
    href,
    year,
    rating,
    country,
    genre,
    name,
}) => {
    const [imageHovered, setImageHovered] = useState(false)
    const [bookmarkHovered, setBookmarkHovered] = useState(false)
    const [similarHovered, setSimilarHovered] = useState(false)
    const [starHovered, setStarHovered] = useState(false)
    const [dislikeHovered, setDislikeHovered] = useState(false)

    const filmGenre = genre.sort((a, b) => a.id - b.id)[0].name

    return (
        <div data-testid="defaultCarouselSlide" className={styles.wrapper}>
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
                                    onMouseLeave={() =>
                                        setBookmarkHovered(false)
                                    }
                                    onMouseEnter={() =>
                                        setBookmarkHovered(true)
                                    }
                                    size="lg"
                                    icon={faBookmark}
                                />
                                <div
                                    data-testid="later"
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
                                    onMouseLeave={() =>
                                        setSimilarHovered(false)
                                    }
                                    onMouseEnter={() => setSimilarHovered(true)}
                                    size="lg"
                                    icon={faWandMagicSparkles}
                                />
                                <div
                                    data-testid="similar"
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
                                    data-testid="alreadyWatched"
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
                                    onMouseLeave={() =>
                                        setDislikeHovered(false)
                                    }
                                    onMouseEnter={() => setDislikeHovered(true)}
                                    size="lg"
                                    icon={faBan}
                                />
                                <div
                                    data-testid="dislike"
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
                            <span>
                                {year}, {country[0].name}, {filmGenre}
                            </span>
                            <p>110 минут</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className={styles.name}>{name}</div>
        </div>
    )
}

export default DefaultCarouselSlide
