import React from 'react'
import classes from './ButtonRound.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export interface ButtonRoundProps {
    src: string
    width: number
    height: number
    onClick?: () => void
    href: string
}

export const ButtonRound = ({ src, width, height, href }: ButtonRoundProps) => {
    return (
        <Link href={href}>
            <button className={classes.button}>
                <Image alt={src} src={src} width={width} height={height} />
            </button>
        </Link>
    )
}
