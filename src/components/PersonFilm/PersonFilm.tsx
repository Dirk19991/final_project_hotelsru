import { IMovie, IPersonMovie } from '@/types/ComponentProps/IMovie'
import styles from './PersonFilm.module.scss'
import Image from 'next/image'
import { Button } from '@/stories/Button/ButtonStandard'
import { useRouter } from 'next/router'
import { useI18nContext } from '@/context/i18n'
import Link from 'next/link'
import useMediaQuery from '@/hooks/useMediaQuery'

const PersonFilm = ({ film }: { film: IPersonMovie }) => {
    const isMobile = useMediaQuery('(max-width: 650px)')
    const { language, i18n } = useI18nContext()
    const fixedRating =
        +parseFloat(film.rating).toFixed(1) || i18n[language].notEnoughRatings
    console.log(film)
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Link href={`../watch/${film.id}`}>
                    <Image
                        fill
                        objectFit="cover"
                        alt="photo"
                        src={film.previewPoster}
                    />
                </Link>
            </div>

            <div
                className={
                    isMobile ? styles.mobileInformation : styles.information
                }
            >
                <div className={styles.year}>{film.year}</div>
                <Link href={`../watch/${film.id}`}>
                    <div className={styles.filmTitle}>{film.name}</div>
                </Link>

                <div className={styles.rating}>
                    {i18n[language].iviRating} {fixedRating}
                </div>
                {isMobile && (
                    <div className={styles.mobileButton}>
                        <Link href={`../watch/${film.id}`}>
                            <Button
                                label={i18n[language].watch}
                                onClick={() => {}}
                                type="watch"
                            />
                        </Link>
                    </div>
                )}
            </div>

            {!isMobile && (
                <div className={styles.button}>
                    <Link href={`../watch/${film.id}`}>
                        <Button
                            label={i18n[language].watch}
                            onClick={() => {}}
                            type="watch"
                        />
                    </Link>
                </div>
            )}
        </div>
    )
}
export default PersonFilm
