import React, { useState } from 'react'
import styles from './SlideSmall.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export interface ISlideSmall {
    image: string
    href: string
    year: number
    rating: string
}

export const SlideSmall = ({ image, href, year, rating }: ISlideSmall) => {
    const [hovered, setHovered] = useState(false)

    return (
        <Link href={href}>
            <div
                onMouseLeave={() => setHovered(false)}
                onMouseEnter={() => setHovered(true)}
                className={styles.imageContainer}
            >
                <Image
                    className={styles.image}
                    fill
                    alt="mainImage"
                    src={image}
                ></Image>

                <div
                    style={{ opacity: hovered ? '1' : '0' }}
                    className={styles.info}
                >
                    <div>{rating}</div>
                    <div>{year}</div>
                </div>
            </div>
        </Link>
    )
}
