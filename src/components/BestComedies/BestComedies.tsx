import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import styles from './BestComedies.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SlideSmall } from '@/stories/SlideSmall/SlideSmall'
import cn from 'classnames'
import data from '../../data/mockData'
import Image from 'next/image'

interface IMoviesData {
    id: number
    name: string
    type: string
    rating: string
    description: string
    slogan: null | string
    poster: string
    previewPoster: string
    year: number
    director: string
    genre: {
        id: number
        name: string
    }[]
    country: {
        id: number
        name: string
    }[]
}

const BestComedies = () => {
    const [moviesData, setMoviesData] = useState<IMoviesData[] | null>(null)
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3001/movies?year=2020')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setMoviesData(res.slice(0, 20)))
            .catch((error) => setMoviesData(data))
    }, [])

    return (
        <section className="container">
            <div className={styles.wrapper}>
                <div className={styles.header}>Лучшие комедии</div>

                <div className={cn(styles.bestComedies, 'small__slider')}>
                    <Swiper
                        onInit={() => setInit(true)}
                        speed={500}
                        breakpoints={{
                            1250: {
                                slidesPerView: 7,
                                slidesPerGroup: 7,
                            },
                            1000: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                            },
                            750: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                            },
                            500: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                        }}
                        style={
                            {
                                '--swiper-navigation-color': '#ffffff80',
                                '--swiper-pagination-color': '#ffffff80',

                                width: '1240px',
                                padding: '40px 5px',
                                transform: 'translateY(-40px)',
                                overflow: 'hidden',
                                position: 'relative',
                            } as CSSProperties
                        }
                        modules={[Navigation]}
                        spaceBetween={25}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        watchSlidesProgress
                    >
                        {moviesData &&
                            moviesData.map((movie) => (
                                <SwiperSlide
                                    style={{
                                        margin: '0px 0px',
                                    }}
                                    key={movie.id}
                                >
                                    <SlideSmall
                                        rating={movie.rating}
                                        year={movie.year}
                                        href="/"
                                        image={movie.previewPoster}
                                        country={movie.country}
                                        genre={movie.genre}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    <div className={styles.prevButton} ref={prevRef}>
                        <Image
                            fill
                            src="./icons/arrowLeft.svg"
                            alt="arrowLeft"
                        />
                    </div>
                    <div className={styles.nextButton} ref={nextRef}>
                        <Image
                            fill
                            src="./icons/arrowRight.svg"
                            alt="arrowRight"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestComedies
