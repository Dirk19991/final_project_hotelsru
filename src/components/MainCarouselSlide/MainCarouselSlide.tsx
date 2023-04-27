import React, {FC} from 'react'
import Image from 'next/image'
import styles from './MainCarouselSlide.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'

interface SlideProps {
    mainImage: string
    mainText: string
    titleImage?: string
    titleText?: string
    label: string
}

const MainCarouselSlide:FC<SlideProps> = ({
    mainImage,
    mainText,
    titleImage,
    titleText,
    label,
}) => {
    return (
        <div className={styles.slide}>
            <div className={styles.wrapper}>
                <Image
                    priority
                    className={styles.image}
                    src={mainImage}
                    alt="slide"
                    fill
                />
                <div className={styles.text}>
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
                    <div className={styles.button}>
                        <Button
                            href="/"
                            label={label}
                            type="watchSubscription"
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCarouselSlide
