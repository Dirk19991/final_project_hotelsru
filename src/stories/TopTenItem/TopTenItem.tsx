import React from 'react'
import styles from './TopTenItem.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export interface TopTenItemProps {
    mainImage: string
    titleImage: string
    numberImage: string
    numberImage2?: string
    href: string
}

export const TopTenItem = ({
    mainImage,
    titleImage,
    numberImage,
    numberImage2,
    href,
}: TopTenItemProps) => {
    return (
        <Link href={href}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.mainImage}
                    fill
                    alt="mainImage"
                    src={mainImage}
                ></Image>
                <div className={styles.titleImage}>
                    <Image fill alt="title" src={titleImage}></Image>
                </div>
                <div className={styles.numberImage}>
                    <Image fill alt="number" src={numberImage}></Image>
                    {numberImage2 && (
                        <Image
                            className={styles.numberImage2}
                            fill
                            alt="number"
                            src={numberImage2}
                        ></Image>
                    )}
                </div>
            </div>
        </Link>
    )
}
