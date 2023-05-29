import React, { FC, useRef } from 'react'
import styles from './DefaultCarouselSlide.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { faBookmark, faWandMagicSparkles, faStar, faBan } from '@fortawesome/free-solid-svg-icons'
import TooltipIcon from './TooltipIcon/TooltipIcon'
import ProgressBar from './ProgressBar/ProgressBar'
import { useTranslation } from 'next-i18next'

const DefaultCarouselSlide: FC<any> = ({ image, href, year, rating, countries, genres, name, duration }) => {
    const { t, i18n } = useTranslation(['common'])
    const AGE_BADGE_SRC = 'https://solea-parent.dfs.ivi.ru/picture/ffffff!0.48,000000!0.48/age18.svg'
    const IMAGE_PLACEHOLDER = '/icons/no-image-placeholder.png'
    const CHARTS = [33, 35, 20, 33]

    const minutesTextForm = [t('minutes0'), t('minutes1'), t('minutes2')]

    const minutesDecl = (minutes: string, text_forms: string[]) => {
        let n = Number(minutes)
        n = Math.abs(n) % 100
        let n1 = n % 10
        if (n > 10 && n < 20) return text_forms[2]
        if (n1 > 1 && n1 < 5) return text_forms[1]
        if (n1 == 1) return text_forms[0]
        return text_forms[2]
    }

    const durationText = `${duration} ${minutesDecl(duration, minutesTextForm)}`
    const country =
        countries && countries.length ? (i18n.language === 'ru' ? countries[0].nameRu : countries[0].nameEn) : ''
    const genre = genres && genres.length ? (i18n.language === 'ru' ? genres[0].nameRu : genres[0].nameEn) : ''
    const info = `${year}, ${country}, ${genre}`

    const [integerRating, fractionalRating] = parseFloat(rating).toFixed(1).toString().split('.')
    const progress = Number(rating.slice(0, 3)) * 10

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
        <Link href={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-testid="defaultCarouselSlide">
            <div className={styles.wrapper} ref={wrapperRef}>
                <div className={styles.images} ref={imgsRef}>
                    <Image
                        className={styles.images__background}
                        fill
                        alt="mainImage"
                        src={image}
                        placeholder="blur"
                        blurDataURL={IMAGE_PLACEHOLDER}
                    />
                    <Image className={styles.images__age} alt="ageBadge" src={AGE_BADGE_SRC} width={24} height={16} />
                </div>
                <div ref={panelRef} className={styles.panel}>
                    <div className={styles.panel__icons}>
                        <TooltipIcon icon={faBookmark} text={t('watchLater')} />
                        <TooltipIcon icon={faWandMagicSparkles} text={t('similar')} />
                        <TooltipIcon icon={faStar} text={t('alreadyWatched')} />
                        <TooltipIcon icon={faBan} text={t('dontLikeIt')} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.rating}>
                            <div className={styles.number}>
                                <span className={styles.number__integer}>{integerRating}</span>
                                <span className={styles.number__fractional}>,{fractionalRating}</span>
                            </div>
                            <div className={styles.charts}>
                                {CHARTS.map((value, index) => (
                                    <ProgressBar progress={value} key={index} className={styles.charts__progressbar} />
                                ))}
                            </div>
                        </div>
                        <div className={`${styles.text} ${styles.text_dark}`}>{t('rating')}</div>
                        <ProgressBar className={styles.progressbar} progress={progress} />
                        <div className={styles.text}>{info}</div>
                        <div className={styles.text}>{durationText}</div>
                    </div>
                </div>
            </div>
            <div className={styles.title} ref={titleRef}>
                {name}
            </div>
            <div className={styles.priceType}>{t('forFree')}</div>
        </Link>
    )
}

export default DefaultCarouselSlide
