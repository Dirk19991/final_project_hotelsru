import React, { CSSProperties } from 'react'
import styles from './MainCarousel.module.scss'
import MainCarouselSlide from '../MainCarouselSlide/MainCarouselSlide'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import cn from 'classnames'
import { useI18nContext } from '@/context/i18n'


const MainCarousel = () => {
    const { i18n, language } = useI18nContext()

    return (
        <section className={styles.carousel}>
            <div className={styles.container}>
                <div className={cn(styles.wrapper, 'main__slider')}>
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
                        <SwiperSlide>
                            <MainCarouselSlide
                                mainImage="/slides/1/main.jpg"
                                mainText="Сотрудник ФСБ с тёмным прошлым защищает свою страну. Детектив с Сергеем Безруковым"
                                titleImage="/slides/1/title.png"
                                label={i18n[language].subscribeAndWatch}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainCarouselSlide
                                mainImage="/slides/2/main.jpg"
                                mainText="Ваши любимые Джейсон Стэйтем и Хью Грант спасают мир в шпионской комедии вашего любимого Гая Ричи"
                                titleImage="/slides/2/title.png"
                                label={i18n[language].subscribeAndWatch}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainCarouselSlide
                                mainImage="/slides/3/main.jpg"
                                mainText="Кай и Герда находят новый друзей и вновь спасают мир. Долгожданное возвращение любимых героев"
                                titleImage="/slides/3/title.png"
                                label={i18n[language].subscribeAndWatch}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainCarouselSlide
                                mainImage="/slides/4/main.jpg"
                                mainText="Дети пытаются помирить поссорившихся родителей. Семейная комедия с Сергеем Жуковым и Helen Yes"
                                titleImage="/slides/4/title.png"
                                label={i18n[language].subscribeAndWatch}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainCarouselSlide
                                mainImage="/slides/5/main.jpg"
                                mainText="  Успешный юрист пытается спасти сына у опасной черты. Хью Джекман в мощной драме от режиссёра «Отца»"
                                titleImage="/slides/5/title.png"
                                label={i18n[language].subscribeAndWatch}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default MainCarousel
