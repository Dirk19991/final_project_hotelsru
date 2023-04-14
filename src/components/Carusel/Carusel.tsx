import React from 'react'
import styles from './Carusel.module.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import Slide from './Slide/Slide'
import 'swiper/css/bundle'

interface Props {
    slides: Array<any> // прописать типы
}

const Carusel = () => {

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
                <div className={styles.carusel__wrapper}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{delay: 3000}}
                        navigation
                    >
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Carusel
