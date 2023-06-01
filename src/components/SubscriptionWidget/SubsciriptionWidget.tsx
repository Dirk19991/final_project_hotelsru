import React, { useEffect, useState } from 'react'
import styles from './SubscriptionWidget.module.scss'
import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { useRouter } from 'next/router'
import MovieService from '@/services/MovieService'

const SubsciriptionWidget = () => {
    const { t } = useTranslation(['header'])
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const { push } = useRouter()
    const [moviesList, setMoviesList] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const IMAGE_PLACEHOLDER = '/icons/no-image-placeholder.png'

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true)
            try {
                const response = await MovieService.getMoviesByQuery('all?sort=rating', '')
                setMoviesList(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchMovies()
    }, [])

    const sliceStep = moviesList && Math.floor(moviesList.length / 3)
    const movies1 = moviesList && moviesList.slice(0, sliceStep + 1)
    const movies2 = moviesList && moviesList.slice(sliceStep + 2, (sliceStep + 1) * 2)
    const movies3 = moviesList && moviesList.slice((sliceStep + 1) * 2 + 1)
    const moviesArr = [movies1, movies2, movies3]

    return (
        <div
            className={styles.widget}
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            data-testid="subscription-widget"
        >
            <div className={styles.carousel}>
                <div className={styles.wrapper}>
                    {isLoading && (
                        <>
                            {[...Array(3)].map((el, i) => (
                                <div className={styles.column} key={i}>
                                    {[...Array(3)].map((el, j) => (
                                        <Link href="/" key={j}>
                                            <div></div>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </>
                    )}
                    {!isLoading &&
                        moviesArr.map((list, idx) => {
                            return (
                                <div className={styles.column} key={idx}>
                                    {list &&
                                        list.map((movie: any) => {
                                            return (
                                                <Link href={`/watch/${movie.id}`} key={movie.id}>
                                                    <Image
                                                        src={movie.poster}
                                                        alt={movie.description}
                                                        width={76}
                                                        height={110}
                                                        placeholder="blur"
                                                        blurDataURL={IMAGE_PLACEHOLDER}
                                                    />
                                                </Link>
                                            )
                                        })}
                                </div>
                            )
                        })}
                </div>
                <div className={cn(styles.description, isHovering && styles.active)}>
                    <div className={styles.price}>
                        <Image src="/icons/ivi-subscription-logo.png" width={50} height={50} alt={t('subscription')} />
                        <div>
                            <p>{t('iviSubscription')}</p>
                            <span>{t('from189')}</span>
                        </div>
                    </div>

                    <div className={styles.subscriptionButton}>
                        <button onClick={() => push('https://www.ivi.ru/profile/subscription')}>
                            {t('subscribe')}
                        </button>
                        <small>{t('youCanCancel')}</small>
                    </div>
                </div>
            </div>

            <div>
                <ButtonFooter
                    height={20}
                    href="/"
                    label={t('watchOnSmartTV')}
                    src="/icons/smartTV.svg"
                    type="long"
                    width={20}
                />
            </div>
        </div>
    )
}

export default SubsciriptionWidget
