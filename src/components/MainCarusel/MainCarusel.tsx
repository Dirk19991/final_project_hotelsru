import React, { CSSProperties } from 'react'
import styles from './MainCarusel.module.scss'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/css/bundle'
import Slide from '@/stories/Slide/Slide'
import cn from 'classnames'

interface Props {
    slides: Array<any> // прописать типы
}



const MainCarusel = () => {
    // const listArray = slides.map((slide, index) => {
    //     return (
    //         <SwiperSlide key={index}>
    //             <Slide />
    //         </SwiperSlide>
    //     )
    // })


    return (
        <section className={styles.carusel}>
            <div className="container">
                <div className={cn(styles.carusel__wrapper, 'main__slider')}>
                    <Swiper
                        style={
                            {
                                '--swiper-navigation-color': '#ffffff80',
                                '--swiper-pagination-color': '#ffffff80',
                                'overflow': 'visible',  
                            } as CSSProperties
                        }
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loopedSlides={3}
                        initialSlide={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        navigation
                    >
                        <SwiperSlide>
                            <Slide
                                mainImage="/slides/1/main.jpg"
                                mainText="Сотрудник ФСБ с тёмным прошлым защищает свою страну. Детектив с Сергеем Безруковым"
                                titleImage="/slides/1/title.png"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                mainImage="/slides/2/main.jpg"
                                mainText="Ваши любимые Джейсон Стэйтем и Хью Грант спасают мир в шпионской комедии вашего любимого Гая Ричи"
                                titleImage="/slides/2/title.png"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                mainImage="/slides/3/main.jpg"
                                mainText="Кай и Герда находят новый друзей и вновь спасают мир. Долгожданное возвращение любимых героев"
                                titleImage="/slides/3/title.png"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                mainImage="/slides/4/main.jpg"
                                mainText="Дети пытаются помирить поссорившихся родителей. Семейная комедия с Сергеем Жуковым и Helen Yes"
                                titleImage="/slides/4/title.png"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                mainImage="/slides/5/main.jpg"
                                mainText="  Успешный юрист пытается спасти сына у опасной черты. Хью Джекман в мощной драме от режиссёра «Отца»"
                                titleImage="/slides/5/title.png"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default MainCarusel
