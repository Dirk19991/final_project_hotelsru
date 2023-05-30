import React, { CSSProperties, useRef, useState, FC } from 'react'
import styles from './DefaultCarousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import DefaultCarouselSlide from '@/stories/DefaultCarouselSlide/DefaultCarouselSlide'

const DefaultCarousel: FC<any> = ({ dataList, title, link }) => {
    const { t } = useTranslation('common')
    const [moviesData, setMoviesData] = useState<any>(dataList)
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const { i18n } = useTranslation()

    return (
        <section className={styles.section}>
            <div className={'container'}>
                <div className={styles.wrapper}>
                    <div className={cn(styles.title, !link && styles.simpleText)}>
                        {!link ? (
                            <span>{title}</span>
                        ) : (
                            <Link href={link}>
                                <span>{title}</span>
                            </Link>
                        )}
                    </div>

                    <div className={cn(styles.carousel, 'default__carousel')}>
                        <Swiper
                            className={styles.swiper}
                            onInit={() => setInit(true)}
                            speed={500}
                            slidesPerView="auto"
                            modules={[Navigation]}
                            breakpoints={{
                                1300: {
                                    slidesPerView: 7,
                                    slidesPerGroup: 7,
                                },
                                1090: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 6,
                                },
                                920: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                },
                                760: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                                600: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                                510: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                                390: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
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
                                moviesData.map((movie: any) => (
                                    <SwiperSlide
                                        style={{
                                            margin: '0px 0px',
                                        }}
                                        key={movie.id}
                                    >
                                        <DefaultCarouselSlide
                                            key={movie.id}
                                            rating={movie.rating}
                                            year={movie.year}
                                            href={`/watch/${movie.id}`}
                                            image={movie.poster}
                                            countries={movie.countries}
                                            genres={movie.genres}
                                            name={i18n.language === 'ru' ? movie.nameRu : movie.nameEn}
                                            duration={movie.duration}
                                        />
                                    </SwiperSlide>
                                ))}
                            {link && (
                                <SwiperSlide
                                    style={{
                                        margin: '0px 0px',
                                    }}
                                >
                                    <Link href={link}>
                                        <div className={styles.showAll}>
                                            <span>{t('watchMore')}</span>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div data-testid="leftButton" className={styles.prevButton} ref={prevRef}>
                            <Image fill src="/icons/arrowLeft.svg" alt="arrowLeft" />
                        </div>
                        <div data-testid="rightButton" className={styles.nextButton} ref={nextRef}>
                            <Image fill src="/icons/arrowRight.svg" alt="arrowRight" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DefaultCarousel
