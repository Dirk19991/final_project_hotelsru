import React, { CSSProperties, FC } from 'react'
import styles from './MainCarousel.module.scss'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import MainCarouselSlide from '@/stories/MainCarouselSlide/MainCarouselSlide'

const MainCarousel: FC<any> = ({ data }) => {
    const { i18n } = useTranslation()

    console.log(data)

    return (
        <section className={styles.carousel}>
            <div className={styles.container}>
                <div className={cn(styles.wrapper, 'main__carousel')}>
                    <Swiper
                        style={
                            {
                                '--swiper-navigation-color': '#ffffff80',
                                '--swiper-pagination-color': '#ffffff80',
                                overflow: 'visible',
                            } as CSSProperties
                        }
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loopedSlides={3}
                        initialSlide={1}
                        loop={true}
                        navigation
                    >
                        {data &&
                            data.map(({ img, titleImg, textRU, textEN, id, link }: any) => (
                                <SwiperSlide key={id}>
                                    <MainCarouselSlide
                                        img={img}
                                        text={i18n.language === 'ru' ? textRU : textEN}
                                        titleImg={titleImg}
                                        link={link}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default MainCarousel
