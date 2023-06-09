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
    label?: string | null
    sublabel?: string | null
    href: string
    type: 'black' | 'grey' | 'long'
    buttonWidth?: string
}

export const ButtonFooter = ({
    label,
    sublabel,
    src,
    width,
    height,
    href,
    type,
    buttonWidth,
}: ButtonFooterProps) => {
    const btnClass = cn(styles.button, styles[type])

    return (
        <Link href={href}>
            <div
                style={{ width: buttonWidth && `${buttonWidth}` }}
                className={btnClass}
            >
                {label ? (
                    <>
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
                    </>
                ) : (
                    <Image
                        className={styles.image}
                        height={height}
                        width={width}
                        src={src}
                        alt={src}
                    ></Image>
                )}
            </div>
        </Link>
    )
}
