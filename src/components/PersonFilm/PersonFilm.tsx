import { IAdminPanelMovie, IMovie, IPersonMovie } from '@/types/ComponentProps/IMovie'
import styles from './PersonFilm.module.scss'
import Image from 'next/image'
import { Button } from '@/stories/Button/ButtonStandard'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useTranslation } from 'next-i18next'

interface PersonFilmProps {
    film: IAdminPanelMovie
}

const PersonFilm = ({ film }: PersonFilmProps) => {
    const isMobile = useMediaQuery('(max-width: 650px)')

    const { t, i18n } = useTranslation(['person'])
    const fixedRating = +parseFloat(film.rating).toFixed(1) || t('notEnoughRatings')
    const lang = i18n.language

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Link href={`../watch/${film.id}`}>
                    <Image fill objectFit="cover" alt="photo" src={film.poster} />
                </Link>
            </div>

            <div className={isMobile ? styles.mobileInformation : styles.information}>
                <div className={styles.year}>{film.year}</div>
                <Link href={`../watch/${film.id}`}>
                    <div className={styles.filmTitle}>{lang === 'en' ? film.nameEn : film.nameRu}</div>
                </Link>

                <div className={styles.rating}>
                    {t('iviRating')} {fixedRating}
                </div>
                {isMobile && (
                    <div className={styles.mobileButton}>
                        <Link href={`../watch/${film.id}`}>
                            <Button label={t('watch')} onClick={() => {}} type="watch" />
                        </Link>
                    </div>
                )}
            </div>

            {!isMobile && (
                <div className={styles.button}>
                    <Link href={`../watch/${film.id}`}>
                        <Button label={t('watch')} onClick={() => {}} type="watch" />
                    </Link>
                </div>
            )}
        </div>
    )
}
export default PersonFilm
