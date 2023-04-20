import React from 'react'
import styles from './ButtonActor.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonRating } from './ButtonRating'

export interface ButtonActorProps {
    src: string
    width: number
    height: number
    href: string
    image: boolean
    children?: React.ReactNode
}

export const ButtonActor = ({
    src = '',
    width = 0,
    height = 0,
    href = '/',
    image,
    children,
}: ButtonActorProps) => {
    return image ? (
        <Link href={href}>
            <button className={styles.button}>
                <div className={styles.image}>
                    <Image alt={src} src={src} width={width} height={height} />
                </div>
            </button>
        </Link>
    ) : (
        <button className={styles.button}>{children}</button>
    )
}
