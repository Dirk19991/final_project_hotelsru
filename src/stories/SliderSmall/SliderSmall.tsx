import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import styles from './SliderSmall.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { SlideSmall } from '@/stories/SlideSmall/SlideSmall'
import cn from 'classnames'
import data from '../../data/mockData'
import Image from 'next/image'

export interface IMoviesData {
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

interface ISliderSmall {
    endpoint: string
    headerText: string
}

const SliderSmall = ({ endpoint, headerText }: ISliderSmall) => {
    const [moviesData, setMoviesData] = useState<IMoviesData[] | null>(null)
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    useEffect(() => {
        fetch(endpoint)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setMoviesData(res.slice(0, 20)))
            .catch((error) => setMoviesData(data))
    }, [endpoint])

    return (
        <section className={styles.sliderContainer}>
            <div className={styles.wrapper}>
                <div className={styles.header}>{headerText}</div>

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
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                            },
                            750: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                            450: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            350: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
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
                                        href={`/watch/${movie.id}`}
                                        image={movie.previewPoster}
                                        country={movie.country}
                                        genre={movie.genre}
                                        name={movie.name}
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

export default SliderSmall
