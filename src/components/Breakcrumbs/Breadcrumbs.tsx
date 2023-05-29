import React, { FC } from 'react'
import styles from './Breadcrumbs.module.scss'
import Link from 'next/link'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useTranslation } from 'next-i18next'
import engNameToLink from '@/util/engNameToLink'

const Breadcrumbs: FC<any> = ({ breadcrumbsData }) => {
    const matchesTabSize = useMediaQuery('(min-width: 600px)')
    const { i18n } = useTranslation(['common'])

    return (
        <section className={styles.breadcrumbs}>
            <div className="container">
                <div className={styles.wrapper}>
                    {matchesTabSize && (
                        <ul className={styles.list}>
                            {breadcrumbsData.map((item: any, i: number) => (
                                <li key={i}>
                                    {i === 0 ? '' : '/'}

                                    {item.links && (
                                        <div className={styles.sublist}>
                                            {item.links.length > 1 && (
                                                <ul>
                                                    {item.links.map(
                                                        (link: any, i: number) =>
                                                            i < 3 && (
                                                                <li key={link.id}>
                                                                    {i !== 0 && `, `}
                                                                    {i18n.language === 'ru' ? link.nameRu : link.nameEn}
                                                                </li>
                                                            )
                                                    )}
                                                </ul>
                                            )}
                                            {item.links.length === 1 && (
                                                <Link
                                                    href={
                                                        item.links[0].shortName
                                                            ? `/movies/all?countries=${item.links[0].shortName}`
                                                            : `/movies/${engNameToLink(item.links[0].nameEn)}`
                                                    }
                                                >
                                                    {i18n.language === 'ru'
                                                        ? item.links[0].nameRu
                                                        : item.links[0].nameEn}
                                                </Link>
                                            )}
                                            <small>{item.links && item.links.length > 3 ? '...' : ''}</small>
                                        </div>
                                    )}

                                    {!item.links && (
                                        <>
                                            {i + 1 === breadcrumbsData.length ? (
                                                <span>{item.title}</span>
                                            ) : (
                                                <Link href={item.href ?? ''}>{item.title}</Link>
                                            )}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Breadcrumbs
