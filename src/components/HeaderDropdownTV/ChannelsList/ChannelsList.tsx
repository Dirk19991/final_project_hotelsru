import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import styles from './ChannelsList.module.scss'
import cn from 'classnames'

interface IChannelsList {
    title: string
    channels: JSX.Element[]
    slidesPerView: number
    slidesPerGroup: number
    width: number
}

const ChannelsList: FC<IChannelsList> = ({ title, channels, slidesPerView, slidesPerGroup, width }) => {
    const leftButtonRef = useRef(null)
    const rightButtonRef = useRef(null)

    const [isHover, setIsHover] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <div className={styles.container} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <h4 className={styles.title}>{title}</h4>
            <Swiper
                className={styles.swiper}
                spaceBetween={16}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerGroup}
                modules={[Navigation]}
                navigation={{
                    prevEl: leftButtonRef.current,
                    nextEl: rightButtonRef.current,
                }}
                lazyPreloadPrevNext={20}
                onSlideChange={(swiper) => {
                    setCurrentSlide(swiper.activeIndex)
                }}
                speed={500}
            >
                {channels.map((channel: any, index: number) => (
                    <SwiperSlide key={index} style={{ width: `${width}px` }}>
                        {channel}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className={cn(styles.shadow, {
                    [styles.shadow_right]: currentSlide < channels.length - slidesPerView - 1,
                    [styles.shadow_left]: currentSlide >= channels.length - slidesPerView - 1,
                })}
            ></div>
            <div
                className={cn(styles.button, styles.button_left, {
                    [styles.button_visible]: isHover && currentSlide !== 0,
                })}
                ref={leftButtonRef}
            >
                <Image fill src="/icons/arrowLeft.svg" alt="arrowLeft" />
            </div>
            <div
                className={cn(styles.button, styles.button_right, {
                    [styles.button_visible]: isHover && currentSlide < channels.length - slidesPerView - 1,
                })}
                ref={rightButtonRef}
            >
                <Image fill src="/icons/arrowRight.svg" alt="arrowRight" />
            </div>
        </div>
    )
}

export default ChannelsList
