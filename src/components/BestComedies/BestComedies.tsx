import React, { CSSProperties, useEffect, useState } from 'react'
import styles from './BestComedies.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SlideSmall } from '@/stories/SlideSmall/SlideSmall'

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
        id: string
        name: string
    }[]
    country: {
        id: string
        name: string
    }[]
}

const BestComedies = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [moviesData, setMoviesData] = useState<IMoviesData[] | null>(null)

    useEffect(() => {
        fetch('http://localhost:3001/movies?year=2020')
            .then((response) => response.json())
            .then((res) => setMoviesData(res.slice(0, 20)))
    }, [])

    console.log(moviesData)

    return (
        <section className="container">
            <div className={styles.wrapper}>
                <div className={styles.header}>Лучшие комедии</div>
                <div className={styles.topTen}>
                    <Swiper
                        breakpoints={{
                            // when window width is >= 768px
                            1250: {
                                slidesPerView: 7,
                                slidesPerGroup: 7,
                            },
                            1000: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                            750: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                            500: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        style={
                            {
                                '--swiper-navigation-color': '#ffffff80',
                                '--swiper-pagination-color': '#ffffff80',
                                padding: '0 5px',
                            } as CSSProperties
                        }
                        modules={[Navigation]}
                        spaceBetween={25}
                        navigation
                    >
                        {moviesData &&
                            moviesData.map((movie) => (
                                <SwiperSlide
                                    style={{ margin: '0px 0px' }}
                                    key={movie.id}
                                >
                                    <SlideSmall
                                        rating={movie.rating}
                                        year={movie.year}
                                        href="/"
                                        image={movie.previewPoster}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default BestComedies
