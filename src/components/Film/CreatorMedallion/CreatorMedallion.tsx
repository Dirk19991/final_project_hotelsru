import { FC, useState } from 'react'
import Image from 'next/image'
import styles from './CreatorMedallion.module.scss'
import cn from 'classnames'
import Link from 'next/link'

interface ICreatorMedallion {
    size: 'small' | 'big'
    name: string
    subtitle: string
    src: string
    href: string
}

const CreatorMedallion: FC<ICreatorMedallion> = ({ size, name, subtitle, src, href }) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <Link href={href}>
            <div
                className={styles.wrapper}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <div
                    className={cn(styles.img, {
                        [styles.img_small]: size === 'small',
                        [styles.img_big]: size === 'big',
                    })}
                >
                    <Image src={src} alt={name} fill className={styles.img__background} />
                </div>
                <div className={styles.description}>
                    {/* {name.split(' ').map((el, i) => (
                        <div
                            key={i}
                            className={cn(styles.name, {
                                [styles.name_hover]: isHover,
                                [styles.name_small]: size === 'small',
                                [styles.name_big]: size === 'big',
                            })}
                        >
                            {el}
                        </div>
                    ))} */}
                    <div className={styles.info}>{subtitle}</div>
                </div>
            </div>
        </Link>
    )
}

export default CreatorMedallion
