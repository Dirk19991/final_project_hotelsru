import React from 'react'
import styles from './ButtonRound.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export interface ButtonRoundProps {
    src: string
    width: number
    height: number
    onClick?: () => void
    href: string
    type: 'round' | 'square' | 'bigViolet'
}

export const ButtonRound = ({
    src,
    width,
    height,
    href,
    type,
}: ButtonRoundProps) => {
    const btnClass = cn(styles.button, styles[type])

    return (
        <Link href={href}>
            <button className={btnClass}>
                <Image
                    className={styles.image}
                    alt={src}
                    src={src}
                    width={width}
                    height={height}
                />
            </button>
        </Link>
    )
}
