import { SlideSmall } from '@/stories/SlideSmall/SlideSmall'
import styles from './Comments.module.scss'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { IMoviesData } from '@/stories/SliderSmall/SliderSmall'
import data from '@/data/mockDataFilm'
import { Button } from '@/stories/Button/ButtonStandard'

const Comments = () => {
    const router = useRouter()
    const filmID = router.query.filmName

    const [filmData, setFilmData] = useState<IMoviesData | null>(null)
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${filmID}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setFilmData(res))
            .catch((error) => setFilmData(data as IMoviesData))
    }, [filmID])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setComment(value)
        if (value.length < 10 && value.length !== 0) {
            setError(`Минимум 10 сиволов, введите еще ${10 - value.length}`)
        } else {
            setError('')
        }
    }

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.comments}>
                    <h2>
                        {filmData?.name} ({filmData?.type} {filmData?.year})
                    </h2>
                    <form className={styles.floating}>
                        <label className={styles.label}>
                            <input
                                className={styles.inputComment}
                                placeholder=" "
                                id="comment"
                                type="text"
                                value={comment}
                                onChange={handleChange}
                            />
                            <label className={styles.float} htmlFor="comment">
                                Введите комментарий
                            </label>
                        </label>
                        <Button
                            onClick={() => {}}
                            type="watchSubscription"
                            label="Отправить"
                        />
                        <span>{error}</span>
                    </form>
                    <div className={styles.commentsList}>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                        <div>Комментарий</div>
                    </div>
                </div>
                <div className={styles.banner}>
                    {filmData && (
                        <SlideSmall
                            rating={filmData.rating}
                            year={filmData.year}
                            href={`/`}
                            image={filmData.previewPoster}
                            country={filmData.country}
                            genre={filmData.genre}
                            name={filmData.name}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Comments
