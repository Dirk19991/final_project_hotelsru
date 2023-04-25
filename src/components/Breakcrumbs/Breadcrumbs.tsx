import React, { FC } from 'react'
import styles from './Breadcrumbs.module.scss'
import Link from 'next/link'

interface IBreadcrumbsCoutry {
    id: number
    country_name: string
    href: string
}

interface IBreadcrumbsData {
    id: number
    title?: string
    countries?: IBreadcrumbsCoutry[]
    href?: string
}

interface IBreadcrumbs {
    breadcrumbsData: IBreadcrumbsData[]
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ breadcrumbsData }) => {
    return (
        <section className={styles.breadcrumbs}>
            <div className="container">
                <div className={styles.wrapper}>
                    <ul className={styles.list}>
                        {breadcrumbsData.map(
                            (item: IBreadcrumbsData, i: number) => (
                                <li key={item.id}>
                                    {i === 0 ? '' : '/'}
                                    {item.countries ? (
                                        <div className={styles.countriesList}>
                                            <ul
                                                
                                            >
                                                {item.countries.map(
                                                    (
                                                        country: IBreadcrumbsCoutry,
                                                        i: number
                                                    ) =>
                                                        i < 3 && (
                                                            <li
                                                                key={country.id}
                                                            >
                                                                {i !== 0 &&
                                                                    `, `}
                                                                {
                                                                    country.country_name
                                                                }
                                                            </li>
                                                        )
                                                )}
                                            </ul>
                                            <small>
                                                {item.countries &&
                                                item.countries.length > 3
                                                    ? '...'
                                                    : ''}
                                            </small>
                                        </div>
                                    ) : (
                                        <>
                                            {i + 1 ===
                                            breadcrumbsData.length ? (
                                                <span>{item.title}</span>
                                            ) : (
                                                <Link href={item.href ?? ''}>
                                                    {item.title}
                                                </Link>
                                            )}
                                        </>
                                    )}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumbs
