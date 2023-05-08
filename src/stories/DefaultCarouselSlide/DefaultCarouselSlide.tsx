import React, { FC, useRef } from 'react'
import styles from './DefaultCarouselSlide.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import {
    faBookmark,
    faWandMagicSparkles,
    faStar,
    faBan,
} from '@fortawesome/free-solid-svg-icons'
import { useI18nContext } from '@/context/i18n'
import TooltipIcon from './TooltipIcon/TooltipIcon'
import ProgressBar from './ProgressBar/ProgressBar'

export interface IDefaultCarouselSlide {
    image: string
    href: string
    year: number
    rating: string
    country: {
        id: number
        name: string
    }[]
    genre: {
        id: number
        name: string
    }[]
    name: string
}

const DefaultCarouselSlide: FC<IDefaultCarouselSlide> = ({
    image,
    href,
    year,
    rating,
    country,
    genre,
    name,
}) => {
    //статические данные
    const AGE_BADGE_SRC =
        'https://solea-parent.dfs.ivi.ru/picture/ffffff!0.48,000000!0.48/age18.svg'
    const CHARTS = [33, 35, 20, 33]
    const PROGRESS = 64
    const TRAIT = 'сюжет'
    const DURATION = '110 минут'
    const PRICE_TYPE = 'Бесплатно'

    const info = `${year}, ${genre.sort((a, b) => a.id - b.id)[0].name}, ${
        country[0].name
    }`
    const [integerRating, fractionalRating] = rating.split('.')

    const { language, i18n } = useI18nContext()

    const panelRef = useRef<HTMLDivElement>(null)
    const imgsRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const onMouseEnter = () => {
        panelRef.current!.style.visibility = 'visible'
        panelRef.current!.style.opacity = '1'
        imgsRef.current!.classList.add(styles.images_hover)
        titleRef.current!.classList.add(styles.title_hover)
        wrapperRef.current!.classList.add(styles.wrapper_hover)
    }

    const onMouseLeave = () => {
        panelRef.current!.style.visibility = 'hidden'
        panelRef.current!.style.opacity = '0'
        imgsRef.current!.classList.remove(styles.images_hover)
        titleRef.current!.classList.remove(styles.title_hover)
        wrapperRef.current!.classList.remove(styles.wrapper_hover)
    }

    return (
        <Link
            href={href}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            data-testid="defaultCarouselSlide"
        >
            <div className={styles.wrapper} ref={wrapperRef}>
                <div className={styles.images} ref={imgsRef}>
                    <Image
                        className={styles.images__background}
                        fill
                        alt="mainImage"
                        src={image}
                    />
                    <Image
                        className={styles.images__age}
                        alt="ageBadge"
                        src={AGE_BADGE_SRC}
                        width={24}
                        height={16}
                    />
                </div>
                <div ref={panelRef} className={styles.panel}>
                    <div className={styles.panel__icons}>
                        <TooltipIcon
                            icon={faBookmark}
                            text={i18n[language].watchLater}
                        />
                        <TooltipIcon
                            icon={faWandMagicSparkles}
                            text={i18n[language].similar}
                        />
                        <TooltipIcon
                            icon={faStar}
                            text={i18n[language].alreadyWatched}
                        />
                        <TooltipIcon
                            icon={faBan}
                            text={i18n[language].dontLikeIt}
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.rating}>
                            <div className={styles.number}>
                                <span className={styles.number__integer}>
                                    {integerRating}
                                </span>
                                <span className={styles.number__fractional}>
                                    ,{fractionalRating.slice(0, 2)}
                                </span>
                            </div>
                            <div className={styles.charts}>
                                {CHARTS.map((value, index) => (
                                    <ProgressBar
                                        progress={value}
                                        key={index}
                                        className={styles.charts__progressbar}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={`${styles.text} ${styles.text_dark}`}>
                            {TRAIT}
                        </div>
                        <ProgressBar
                            className={styles.progressbar}
                            progress={PROGRESS}
                        />
                        <div className={styles.text}>{info}</div>
                        <div className={styles.text}>{DURATION}</div>
                    </div>
                </div>
            </div>
            <div className={styles.title} ref={titleRef}>
                {name}
            </div>
            <div className={styles.priceType}>{PRICE_TYPE}</div>
        </Link>
    )
}

export default DefaultCarouselSlide
