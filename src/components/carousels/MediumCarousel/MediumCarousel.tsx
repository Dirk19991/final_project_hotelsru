import React, { CSSProperties, useRef, useState, FC } from 'react'
import Image from 'next/image'
import styles from './MediumCarousel.module.scss'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import { MediumCarouselSlide } from '@/stories/MediumCarouselSlide/MediumCarouselSlide'

interface Top10Movie {
    id: number
    image: string
    titleImg: string
    link: string
}

interface IMediumCarousel {
    data: Top10Movie[]
}

const MediumCarousel: FC<IMediumCarousel> = ({ data }) => {
    const { t } = useTranslation(['common'])
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <section className={styles.carouselContainer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <div>
                            <Image alt="top10" width={116} height={28} src="/icons/top10.svg" />
                        </div>
                        <span>{t('thisWeek')}</span>
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
                            {data.map((el: Top10Movie, i: number) => (
                                <SwiperSlide key={el.id}>
                                    <MediumCarouselSlide
                                        href={el.link}
                                        mainImage={el.image}
                                        titleImage={el.titleImg}
                                        numberImage={`/topTen/${i + 1}/number.svg`}
                                        numberImage2={i + 1 === 10 ? `/topTen/${i + 1}/number2.svg` : ''}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={styles.prevButton} ref={prevRef}>
                            <Image fill src="./icons/arrowLeft.svg" alt="arrowLeft" />
                        </div>
                        <div className={styles.nextButton} ref={nextRef}>
                            <Image fill src="./icons/arrowRight.svg" alt="arrowRight" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MediumCarousel
