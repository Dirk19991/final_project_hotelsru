import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import styles from './DefaultCarousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import DefaultCarouselSlide from '../DefaultCarouselSlide/DefaultCarouselSlide'
import cn from 'classnames'
import data from '../../data/mockData'
import Link from 'next/link'
import 'swiper/css/bundle'
import Image from 'next/image'
import { ISimilarMovie, ISmallSliderMovie } from '@/types/ComponentProps/IMovie'

interface WithEndpoint {
    type: 'endpoint'
    endpoint: string
    headerText: string
}

interface WithData {
    type: 'similarMovie'
    similarMovies: ISimilarMovie[]
    headerText: string
}

type ISliderSmall = WithEndpoint | WithData

const DefaultCarousel = (props: ISliderSmall) => {
    const [moviesData, setMoviesData] = useState<ISmallSliderMovie[] | null>(
        null
    )
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    useEffect(() => {
        if (props.type === 'similarMovie') {
            return
        }

        fetch(props.endpoint)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setMoviesData(res.slice(0, 20)))
            .catch((error) => setMoviesData(data))
    }, [props])

    return (
        <section className={styles.section}>
            <div className={'container'}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <Link href="/movies/">
                            <span>{props.headerText}</span>
                        </Link>
                    </div>

                    <div className={cn(styles.carousel, 'default__carousel')}>
                        <Swiper
                            onInit={() => setInit(true)}
                            speed={500}
                            slidesPerView="auto"
                            modules={[Navigation]}
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
                                300: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                            }}
                            style={
                                {
                                    '--swiper-navigation-color': '#ffffff80',
                                    '--swiper-pagination-color': '#ffffff80',
                                    overflow: 'hidden',
                                } as CSSProperties
                            }
                            spaceBetween={20}
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
                                        <DefaultCarouselSlide
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
                            {props.type === 'similarMovie' &&
                                props.similarMovies.map((movie) => (
                                    <SwiperSlide
                                        style={{
                                            margin: '0px 0px',
                                        }}
                                        key={movie.Movie_id}
                                    >
                                        <DefaultCarouselSlide
                                            rating={movie.Movie_rating}
                                            year={movie.Movie_year}
                                            href={`/watch/${movie.Movie_id}`}
                                            image={movie.Movie_previewPoster}
                                            country={[
                                                {
                                                    id: 1,
                                                    name: 'США',
                                                },
                                            ]}
                                            genre={[
                                                {
                                                    id: 1,
                                                    name: 'боевик',
                                                },
                                            ]}
                                            name={movie.Movie_name}
                                        />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                        <div className={styles.prevButton} ref={prevRef}>
                            <Image
                                fill
                                src="/icons/arrowLeft.svg"
                                alt="arrowLeft"
                            />
                        </div>
                        <div className={styles.nextButton} ref={nextRef}>
                            <Image
                                fill
                                src="/icons/arrowRight.svg"
                                alt="arrowRight"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DefaultCarousel
