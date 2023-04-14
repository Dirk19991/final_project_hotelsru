import React from 'react'
import Image from 'next/image'
import styles from './Slide.module.scss'
import 'swiper/css'
import { Button } from '@/stories/Button/ButtonStandard'
import img from '../temp/test-img.jpg'
import logo from '../temp/test-logo.png'

const Slide = () => {
    return (
        <div className={styles.slide}>
            <Image src={img} alt="" fill />
            <div className={styles.slide__wrapper}>
                <Image src={logo} alt="" width={460} height={159} />
                <span>
                    Ваши любимые Джейсон Стэйтем и Хью Грант спасают мир в
                    шпионской комедии вашего любимого Гая Ричи
                </span>
                <Button
                    href="/"
                    label="Смотреть по подписке"
                    type="watchSubscription"
                ></Button>
            </div>
        </div>
    )
}

export default Slide
