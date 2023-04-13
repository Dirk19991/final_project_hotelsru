import React from 'react'
import classes from './ButtonFooter.module.scss'
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
}

export const ButtonFooter = ({
    label,
    sublabel,
    src,
    width,
    height,
    href,
}: ButtonFooterProps) => {
    return (
        <Link href={href}>
            <div className={classes.button}>
                <Image
                    className={classes.image}
                    height={height}
                    width={width}
                    src={src}
                    alt={src}
                ></Image>
                <div className={classes.column}>
                    <div className={classes.sublabel}>{sublabel}</div>
                    <div className={classes.label}>{label}</div>
                </div>
            </div>
        </Link>
    )
}
