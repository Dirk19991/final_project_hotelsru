import styles from './Person.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PersonFilm from '../PersonFilm/PersonFilm'
import { useRouter } from 'next/router'
import { IPerson } from '@/types/ComponentProps/IMovie'

const Person = () => {
    const router = useRouter()

    const [actorData, setActorData] = useState<IPerson | null>(null)

   

    useEffect(() => {
      fetch('http://localhost:3001/person/1337').then(res => res.json()).then(data => setActorData(data))

    }, [])
    
    const name = actorData && actorData.name
    const enName = actorData && actorData.enName
    const numberOfFilms = actorData && actorData.movies.length

    return (
        actorData ? 
        <div className="container">
            <div className={styles.wrapper}>
                <div onClick={() => router.back()} className={styles.back}>
                    <Image
                        width={15}
                        height={15}
                        src="/icons/arrowLeft.svg"
                        alt="arrowLeft"
                    />
                    <div>Назад</div>{' '}
                </div>
                <div className={styles.mainInfo}>
                    <div className={styles.photo}>
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={actorData.photo}
                            alt="photo"
                        />
                    </div>
                    <div className={styles.ruName}>{name}</div>
                    <div className={styles.enName}>{enName}</div>
                    <div className={styles.filmography}>
                        Полная фильмография <span>{numberOfFilms} фильма</span>
                    </div>
                    <div className={styles.films}>
                        {actorData.movies.map((film) => (
                            <PersonFilm key={film.id} film={film} />
                        ))}
                    </div>
                </div>
            </div>
        </div> : <div>НЕТ ДАННЫХ</div>
    )
}
export default Person
