import React, { FC } from 'react'
import Image from 'next/image'
import styles from './MainCarouselSlide.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import { useTranslation } from 'next-i18next'

interface IMainSlide {
    img: string
    text: string
    titleImg?: string
    titleText?: string
    link: string
}

const MainCarouselSlide: FC<IMainSlide> = ({ img, text, titleImg, titleText, link }) => {
    const { t } = useTranslation(['common'])

    return (
        <div className={styles.slide}>
            <div className={styles.wrapper}>
                <Image priority className={styles.image} src={img} alt={text} fill sizes={'(max-width: 768px) 100vw'} />
                <div className={styles.text}>
                    {titleImg ? (
                        <Image priority className={styles.titleImage} src={titleImg} alt="" width={460} height={159} />
                    ) : (
                        <div className={styles.titleText}>{titleText}</div>
                    )}
                    <span>{text}</span>
                    <div className={styles.button}>
                        <Button href={link} label={t('subscribeAndWatch')} type="watchSubscription"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCarouselSlide
