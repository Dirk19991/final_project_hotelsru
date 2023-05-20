import React, { FC } from 'react'
import Image from 'next/image'
import styles from './MainCarouselSlide.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import { useTranslation } from 'next-i18next'

interface SlideProps {
    img: string
    text: string
    titleImg?: string
    titleText?: string
}

const MainCarouselSlide: FC<SlideProps> = ({
    img,
    text,
    titleImg,
    titleText,
}) => {
    const { t } = useTranslation(['common'])

    return (
        <div className={styles.slide}>
            <div className={styles.wrapper}>
                <Image
                    priority
                    className={styles.image}
                    src={img}
                    alt="slide"
                    fill
                />
                <div className={styles.text}>
                    {titleImg ? (
                        <Image
                            priority
                            className={styles.titleImage}
                            src={titleImg}
                            alt=""
                            width={460}
                            height={159}
                        />
                    ) : (
                        <div className={styles.titleText}>{titleText}</div>
                    )}
                    <span>{text}</span>
                    <div className={styles.button}>
                        <Button
                            href="/"
                            label={t('subscribeAndWatch')}
                            type="watchSubscription"
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCarouselSlide
