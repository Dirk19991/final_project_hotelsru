import { FC } from 'react'
import styles from './Header.module.scss'
import { IMovie } from '@/types/ComponentProps/IMovie'
import toHoursAndMinutes from '@/util/toHoursAndMinutes'
import FilmBreadcrumbs from '../Breadcrumbs/Breadcrumbs'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'

interface IHeader {
    film: IMovie
}

const Header: FC<IHeader> = ({
    film: { startYear, type, nameRu, nameEn, genres, duration },
}) => {
    const { t, i18n } = useTranslation(['film'])
    const time = toHoursAndMinutes(duration)

    return (
        <div className={cn(styles.wrapper, {})}>
            <h2 className={styles.name}>
                {i18n.language === 'en' ? nameEn : nameRu} (
                {t(type as 'movie' | 'tv-series' | 'cartoon')} {startYear})
            </h2>
            <div className={styles.production}>
                <span className={styles.production__year}>{startYear}</span>
                &nbsp; {time}
            </div>
            <FilmBreadcrumbs
                items={genres.map((elem) => {
                    return { name: elem.name, href: '/' }
                })}
            />
        </div>
    )
}

export default Header
