import React from 'react'
import styles from './TopTenItem.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export interface TopTenItemProps {
    mainImage: string
    titleImage: string
    numberImage: string
    href: string
}

export const TopTenItem = ({
    mainImage,
    titleImage,
    numberImage,
    href,
}: TopTenItemProps) => {
    return (
        <Link href={href}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.mainImage}
                    fill
                    alt={mainImage}
                    src={mainImage}
                ></Image>
                <div className={styles.titleImage}>
                    <Image fill alt={titleImage} src={titleImage}></Image>
                </div>
                <div className={styles.numberImage}>
                    <Image fill alt={numberImage} src={numberImage}></Image>
                </div>
            </div>
        </Link>
    )
}
