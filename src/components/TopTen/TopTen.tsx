import React, { CSSProperties, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './TopTen.module.scss'
import { TopTenItem } from '@/stories/TopTenItem/TopTenItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import cn from 'classnames'

const TopTen = () => {
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section className="container">
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
                    <span>за неделю</span>
                </div>
                <div className={cn(styles.topTen, 'medium__slider')}>
                    <Swiper
                        onInit={() => setInit(true)}
                        breakpoints={{
                            1250: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
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
                                marginTop: '20px',
                            } as CSSProperties
                        }
                        modules={[Navigation]}
                        spaceBetween={25}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                    >
                        {numbers.map((number) => (
                            <SwiperSlide key={number}>
                                <TopTenItem
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
        </section>
    )
}

export default TopTen
