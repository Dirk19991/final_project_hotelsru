import React from 'react'
import styles from './ButtonFooter.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

// Отдельный компонент для кнопок футера, поскольку там неоднородный текст. Сделал кнопку дивом, поскольку в button нельзя добавлять дивы, а здесь это необходимо для отображения двухстрочного текста. Так сделано и на самом сайте ivi.

export interface ButtonFooterProps {
    src: string
    width: number
    height: number
    onClick?: () => void
    label?: string
    sublabel?: string
    href: string
    type: 'black' | 'grey' | 'long'
}

export const ButtonFooter = ({
    label,
    sublabel,
    src,
    width,
    height,
    href,
    type,
}: ButtonFooterProps) => {
    const btnClass = cn(styles.button, styles[type])

    return (
        <Link href={href}>
            <div className={btnClass}>
                <Image
                    className={styles.image}
                    height={height}
                    width={width}
                    src={src}
                    alt={src}
                ></Image>
                <div className={styles.column}>
                    <div className={styles.sublabel}>{sublabel}</div>
                    <div className={styles.label}>{label}</div>
                </div>
            </div>
        </Link>
    )
}
