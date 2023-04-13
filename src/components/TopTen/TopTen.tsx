import React from 'react'
import Image from 'next/image'
import styles from './TopTen.module.scss'
import { TopTenItem } from '@/stories/TopTenItem/TopTenItem'

const TopTen = () => {
    const numbers = [1, 2, 3, 4, 5]

    return (
        <section className="container">
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div>
                        <Image
                            alt="top10"
                            width={116}
                            height={28}
                            src="/icons/top10.svg"
                        />
                    </div>
                    <span>за неделю</span>
                </div>
                <div className={styles.topTen}>
                    {numbers.map((number) => (
                        <TopTenItem
                            key={number}
                            href="/"
                            mainImage={`/topTen/${number}/main.jpg`}
                            numberImage={`/topTen/${number}/number.svg`}
                            titleImage={`/topTen/${number}/title.png`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopTen
