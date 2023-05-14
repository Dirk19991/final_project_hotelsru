import { FC } from 'react'
import styles from './Header.module.scss'
import { IMovie } from '@/types/ComponentProps/IMovie'
import { useI18nContext } from '@/context/i18n'
import toHoursAndMinutes from '@/util/toHoursAndMinutes'
import FilmBreadcrumbs from '../Breadcrumbs/Breadcrumbs'
import cn from 'classnames'

interface IHeader {
    film: IMovie
    align?: 'left' | 'center'
}

const Header: FC<IHeader> = ({
    align,
    film: { startYear, type, nameRu, nameEn, genres, duration },
}) => {
    const { language, i18n } = useI18nContext()
    const time = toHoursAndMinutes(duration)

    return (
        <div
            className={cn(styles.wrapper, {
                [styles.wrapper_center]: align === 'center',
                [styles.wrapper_left]: align === 'left',
            })}
        >
            <h2 className={styles.name}>
                {language === 'en' ? nameEn : nameRu} (
                {i18n[language][type as 'movie' | 'tv-series' | 'cartoon']}{' '}
                {startYear})
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
