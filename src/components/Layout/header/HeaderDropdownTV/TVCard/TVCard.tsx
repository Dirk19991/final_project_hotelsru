import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import styles from './TVCard.module.scss'

interface ITVCard {
    channel: string
    src: string
}

const TVCard: FC<ITVCard> = ({ channel, src }) => {
    return (
        <Link href={`https://www.ivi.ru/tvchannels/watch/${channel}`}>
            <Image src={src} alt={channel} fill className={styles.image} />
        </Link>
    )
}

export default TVCard
