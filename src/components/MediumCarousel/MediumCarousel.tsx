import React, { CSSProperties, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './MediumCarousel.module.scss'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'
import { useI18nContext } from '@/context/i18n'
import { MediumCarouselSlide } from '@/stories/MediumCarouselSlide/MediumCarouselSlide'

const MediumCarousel = () => {
    const { i18n, language } = useI18nContext()
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section className={styles.carouselContainer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <div>
                            <Image
                                alt="top10"
                                width={116}
                                height={28}
                                src="/icons/top10.svg"
                            />
                        </div>
                        <span>{i18n[language].thisWeek}</span>
                    </div>
                    <div className={cn(styles.topTen, 'medium__slider')}>
                        <Swiper
                            onInit={() => setInit(true)}
                            breakpoints={{
                                1300: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                },
                                1090: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                                760: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                                200: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                            }}
                            style={
                                {
                                    '--swiper-navigation-color': '#ffffff80',
                                    '--swiper-pagination-color': '#ffffff80',
                                    marginTop: '20px',
                                } as CSSProperties
                            }
                            modules={[Navigation]}
                            spaceBetween={24}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                        >
                            {numbers.map((number) => (
                                <SwiperSlide key={number}>
                                    <MediumCarouselSlide
                                        href="/"
                                        mainImage={`/topTen/${number}/main.jpg`}
                                        numberImage={`/topTen/${number}/number.svg`}
                                        titleImage={`/topTen/${number}/title.png`}
                                        numberImage2={
                                            number === 10
                                                ? `/topTen/${number}/number2.svg`
                                                : ''
                                        }
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
            </div>
        </section>
    )
}

export default MediumCarousel
