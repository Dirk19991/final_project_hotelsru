import Link from 'next/link'
import styles from './BroadcastCard.module.scss'
import Image from 'next/image'
import { FC, useState } from 'react'
import cn from 'classnames'

export interface Broadcast {
    image: string
    title: string
    time: string
    name: string
}

interface IBroadcastCard {
    broadcast: Broadcast
}

const BroadcastCard: FC<IBroadcastCard> = ({
    broadcast: { image, title, time, name },
}) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <Link
            href={'https://www.ivi.ru/tvplus'}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={styles.container}>
                <Image
                    src={`/tv/broadcast/${image}.jpg`}
                    alt={title}
                    width={58}
                    height={38}
                    className={cn(styles.image, {
                        [styles.image_hover]: isHover,
                    })}
                />
                <div className={styles.info}>
                    <h4
                        className={cn(styles.title, {
                            [styles.title_hover]: isHover,
                        })}
                    >
                        {title}
                    </h4>
                    <div className={styles.text}>
                        <span>{time}</span>
                        <span className={styles.text__delimiter}>•</span>
                        <span>{name}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BroadcastCard
