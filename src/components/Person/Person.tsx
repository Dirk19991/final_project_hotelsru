import styles from './Person.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import data from '@/data/mockDataActor'
import PersonFilm from '../PersonFilm/PersonFilm'
import { useRouter } from 'next/router'

const Person = () => {
    const router = useRouter()

    const name = data.name
    const enName = data.enName
    const numberOfFilms = data.movies.length

    return (
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
                            src="/mockActor.webp"
                            alt="photo"
                        />
                    </div>
                    <div className={styles.ruName}>{name}</div>
                    <div className={styles.enName}>{enName}</div>
                    <div className={styles.filmography}>
                        Полная фильмография <span>{numberOfFilms} фильма</span>
                    </div>
                    <div className={styles.films}>
                        {data.movies.map((film) => (
                            <PersonFilm key={film.id} film={film} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Person
