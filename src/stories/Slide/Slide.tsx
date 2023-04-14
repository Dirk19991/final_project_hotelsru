import React from 'react'
import Image from 'next/image'
import styles from './Slide.module.scss'
import 'swiper/css'
import { Button } from '../Button/ButtonStandard'

interface SlideProps {
    mainImage: string
    mainText: string
    titleImage?: string
    titleText?: string
}

const Slide = ({ mainImage, mainText, titleImage, titleText }: SlideProps) => {
    return (
        <div className={styles.slide}>
            <Image
                priority
                className={styles.mainImage}
                src={mainImage}
                alt="slide"
                fill
            />
            <div className={styles.slide__wrapper}>
                {titleImage ? (
                    <Image
                        priority
                        className={styles.titleImage}
                        src={titleImage}
                        alt=""
                        width={460}
                        height={159}
                    />
                ) : (
                    <div className={styles.titleText}>{titleText}</div>
                )}
                <span>{mainText}</span>
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
