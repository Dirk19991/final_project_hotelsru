import { FC } from 'react'
import styles from './Header.module.scss'
import engNameToLink from '@/util/engNameToLink'
import toHoursAndMinutes from '@/util/toHoursAndMinutes'
import FilmBreadcrumbs from '../Breadcrumbs/Breadcrumbs'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import { Genre } from '@/types/Response/MovieResponse'

interface Header {
    year: string
    title: string
    genres: Genre[]
    duration: string
}

const Header: FC<Header> = ({ year, title, genres, duration }) => {
    const { t, i18n } = useTranslation(['film'])
    const time = toHoursAndMinutes(duration, i18n)

    return (
        <div className={cn(styles.wrapper, {})} data-testid="film-header">
            <h2 className={styles.name}>
                {title} ({t('movie')} {year})
            </h2>
            <div className={styles.production}>
                <span className={styles.production__year}>{year}</span>
                &nbsp; {time}
                &nbsp; {'18+'}
            </div>
            <FilmBreadcrumbs
                items={genres.map((genre: Genre) => {
                    const name = i18n.language === 'ru' ? genre.nameRu : genre.nameEn
                    const link = engNameToLink(genre.nameEn)
                    return { name, href: `/movies/${link}` }
                })}
            />
        </div>
    )
}

export default Header
