import styles from './Person.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PersonFilm from '../PersonFilm/PersonFilm'
import { useRouter } from 'next/router'
import { IPerson } from '@/types/ComponentProps/IMovie'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useTranslation } from 'next-i18next'

const Person = () => {
    function getFilmWord(number: number | null) {
        if (number === null) {
            return
        }

        let lastTwoDigits = 0
        if (number >= 10) {
            lastTwoDigits = +number.toString().slice(-2)
        }

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return i18n.language === 'en' ? 'movies' : 'фильмов'
        }

        const stringifiedNum = number.toString()
        const lastDigit = +stringifiedNum[stringifiedNum.length - 1]

        let filmWord = ''
        switch (lastDigit) {
            case 1:
                filmWord = i18n.language === 'en' ? 'movie' : 'фильм'
                break
            case 2:
            case 3:
            case 4:
                filmWord = i18n.language === 'en' ? 'movies' : 'фильма'
                break
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
                filmWord = i18n.language === 'en' ? 'movies' : 'фильмов'
                break
            default:
                break
        }

        return filmWord
    }

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
    const filmWord = numberOfFilms ? getFilmWord(numberOfFilms) : getFilmWord(null)

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
