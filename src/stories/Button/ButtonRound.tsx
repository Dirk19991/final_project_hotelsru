import React from 'react'
import styles from './ButtonRound.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export interface ButtonRoundProps {
    src?: string
    width?: number
    height?: number
    onClick?: () => void
    href?: string
    type: 'round' | 'square' | 'bigViolet' | 'grey' | 'language'
    children?: React.ReactNode
}

export const ButtonRound = ({
    src = '',
    width = 0,
    height = 0,
    href = '/',
    type,
    children,
    onClick,
}: ButtonRoundProps) => {
    const btnClass = cn(styles.button, styles[type])

    return type === 'language' ? (
        <button onClick={onClick} className={btnClass}>
            {children ? children : 'RU'}
        </button>
    ) : (
        <Link href={href}>
            <button onClick={onClick} className={btnClass}>
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
