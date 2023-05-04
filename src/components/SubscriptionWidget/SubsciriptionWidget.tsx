import React, { useState } from 'react'
import styles from './SubscriptionWidget.module.scss'
import data from '@/data/mockData'
import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { useI18nContext } from '@/context/i18n'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { useRouter } from 'next/router'

const SubsciriptionWidget = () => {
    const { i18n, language } = useI18nContext()

    const [isHovering, setIsHovering] = useState<boolean>(false)

    const sliceStep = Math.floor(data.length / 3)
    const movies1 = data.slice(0, sliceStep + 1)
    const movies2 = data.slice(sliceStep + 2, (sliceStep + 1) * 2)
    const movies3 = data.slice((sliceStep + 1) * 2 + 1)

    const { push } = useRouter()

    return (
        <div
            className={styles.widget}
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            data-testid="subscription-widget"
        >
            <div className={styles.carousel}>
                <div className={styles.wrapper}>
                    {[movies1, movies2, movies3].map((list, idx) => {
                        return (
                            <div className={styles.column} key={idx}>
                                {list.map((movie) => {
                                    return (
                                        <Link
                                            href={`/watch/${movie.id}`}
                                            key={movie.id}
                                        >
                                            <Image
                                                src={movie.poster}
                                                alt={movie.description}
                                                width={76}
                                                height={110}
                                            />
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div
                    className={cn(
                        styles.description,
                        isHovering && styles.active
                    )}
                >
                    <div className={styles.price}>
                        <Image
                            src="/icons/ivi-subscription-logo.png"
                            width={50}
                            height={50}
                            alt="Подписка"
                        />
                        <div>
                            <p>{i18n[language].iviSubscription}</p>
                            <span>{i18n[language].from189}</span>
                        </div>
                    </div>

                    <div className={styles.subscriptionButton}>
                        <button
                            onClick={() =>
                                push('https://www.ivi.ru/profile/subscription')
                            }
                        >
                            {i18n[language].subscribe}
                        </button>
                        <small>{i18n[language].youCanCancel}</small>
                    </div>
                </div>
            </div>

            <div>
                <ButtonFooter
                    height={20}
                    href="/"
                    label={i18n[language].watchOnSmartTV}
                    src="/icons/smartTV.svg"
                    type="long"
                    width={20}
                />
            </div>
        </div>
    )
}

export default SubsciriptionWidget
