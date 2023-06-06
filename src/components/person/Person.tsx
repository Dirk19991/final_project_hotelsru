import styles from './Person.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PersonFilm from './PersonFilm/PersonFilm'
import { useRouter } from 'next/router'
import { IActor, IAdminPanelMovie, IPerson } from '@/types/Component/IMovie'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useTranslation } from 'next-i18next'
import getFilmWord from '@/util/getFilmWord'
import { $auth } from '@/lib/axios'
import { PORT } from '../admin/AdminPanel'

interface PersonProps {
    personData: GetActorResponse
}

export interface GetActorResponse {
    person: IActor
    movies: {
        result: IAdminPanelMovie[]
    }
}

const Person = ({ personData }: PersonProps) => {
    const isTab = useMediaQuery('(max-width: 1160px)')
    const router = useRouter()

    const { t, i18n } = useTranslation(['person'])
    const [actorData, setActorData] = useState<GetActorResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const name = personData && personData.person.nameRu
    const enName = personData && personData.person.nameEn
    const numberOfFilms = personData && personData.movies.result.length
    const filmWord = numberOfFilms ? getFilmWord(numberOfFilms, i18n) : getFilmWord(null)

    const sortedMovies = personData?.movies.result.sort((a, b) => +b.year - +a.year)

    return personData ? (
        <div className="container">
            <div className={styles.wrapper}>
                <div onClick={() => router.back()} className={styles.back}>
                    <Image width={15} height={15} src="/icons/arrowLeft.svg" alt="arrowLeft" />
                    <div>{t('back')}</div>{' '}
                </div>
                <div className={styles.mainInfo}>
                    <div className={styles.photo}>
                        <Image layout="fill" objectFit="cover" src={personData.person.photo} alt="photo" />
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
