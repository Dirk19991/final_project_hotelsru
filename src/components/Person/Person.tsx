import styles from './Person.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PersonFilm from '../PersonFilm/PersonFilm'
import { useRouter } from 'next/router'
import { IPerson } from '@/types/ComponentProps/IMovie'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useTranslation } from 'next-i18next'
import getFilmWord from '@/util/getFilmWord'

const Person = () => {
    const isTab = useMediaQuery('(max-width: 1160px)')
    const router = useRouter()

    const { t, i18n } = useTranslation(['person'])
    const [actorData, setActorData] = useState<IPerson | null>(null)

    useEffect(() => {
        fetch('http://localhost:3001/person/1337')
            .then((res) => res.json())
            .then((data) => setActorData(data))
    }, [])

    const name = actorData && actorData.name
    const enName = actorData && actorData.enName
    const numberOfFilms = actorData && actorData.movies.length
    const filmWord = numberOfFilms ? getFilmWord(numberOfFilms, i18n) : getFilmWord(null)

    const sortedMovies = actorData?.movies.sort((a, b) => b.year - a.year)

    return actorData ? (
        <div className="container">
            <div className={styles.wrapper}>
                <div onClick={() => router.back()} className={styles.back}>
                    <Image width={15} height={15} src="/icons/arrowLeft.svg" alt="arrowLeft" />
                    <div>{t('back')}</div>{' '}
                </div>
                <div className={styles.mainInfo}>
                    <div className={styles.photo}>
                        <Image layout="fill" objectFit="cover" src={actorData.photo} alt="photo" />
                    </div>
                    <div className={styles.ruName}>{i18n.language === 'en' ? enName : name}</div>
                    <div className={styles.enName}>{i18n.language === 'ru' && enName}</div>
                    <div className={styles.filmography}>
                        {t('fullFilmography')}{' '}
                        <span>
                            {numberOfFilms} {filmWord}
                        </span>
                    </div>
                    <div className={isTab ? styles.tabFilms : styles.films}>
                        {sortedMovies && sortedMovies.map((film) => <PersonFilm key={film.id} film={film} />)}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h1>НЕТ ДАННЫХ</h1>
    )
}
export default Person
