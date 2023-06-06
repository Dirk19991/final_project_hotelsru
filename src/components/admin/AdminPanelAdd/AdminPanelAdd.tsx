import { useEffect, useState } from 'react'
import styles from './AdminPanelAdd.module.scss'
import React from 'react'
import Select, { MultiValue } from 'react-select'
import { IGenre } from '@/types/Component/IMovie'
import { PORT } from '../AdminPanel'
import { $auth } from '@/lib/axios'

const AdminPanelAdd = () => {
    const [nameRu, setNameRu] = useState<string>('')
    const [nameEn, setNameEn] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [trailer, setTrailer] = useState<string>('')
    const [year, setYear] = useState<string>('')
    const [rating, setRating] = useState<string>('')
    const [ratingCount, setRatingCount] = useState<string>('')
    const [ageRating, setAgeRating] = useState<string>('')
    const [poster, setPoster] = useState<string>('')
    const [duration, setDuration] = useState<string>('')
    const [slogan, setSlogan] = useState<string>('')

    const [error, setError] = useState<boolean>(false)
    const [saved, setSaved] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [requestName, setRequestName] = useState<boolean>(false)
    const [chosenGenres, setChosenGenres] = useState<MultiValue<{ value: string; label: string }>>([])
    const [allGenres, setAllGenres] = useState<{ value: string; label: string; id: number }[] | null>(null)

    const numberRegex = /^(?!0\d)\d*(\.\d+)?$/
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

    function onTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.target.style.height = ''
        e.target.style.height = Math.max(e.target.scrollHeight, 40) + 'px'
        setDescription(e.target.value)
    }

    function onFormChange(e: React.ChangeEvent<HTMLFormElement>) {
        setSaved(false)
        setError(false)
        setLoading(false)
        setRequestName(false)
    }

    const getGenres = async () => {
        try {
            setLoading(true)
            const genreResponse = await $auth.get(`${PORT}/genres`)
            const genreData = (await genreResponse.data) as IGenre[]
            setAllGenres(
                genreData.map((genre) => {
                    return {
                        label: genre.nameRu,
                        value: genre.nameEn,
                        id: genre.id,
                    }
                })
            )
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(true)
            setLoading(false)
        }
    }

    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const genreValues = chosenGenres.map((genre) => genre.value)

        if (!nameRu && !nameEn) {
            setRequestName(true)
            return
        }

        if (
            !numberRegex.test(year) ||
            !numberRegex.test(rating) ||
            !numberRegex.test(ratingCount) ||
            !numberRegex.test(ageRating) ||
            !numberRegex.test(duration)
        ) {
            setError(true)
            return
        }

        if (!urlRegex.test(poster) || !urlRegex.test(trailer)) {
            setError(true)
            return
        }

        const newMovie = {
            nameRu: nameRu ? nameRu : nameEn,
            nameEn: nameEn ? nameEn : nameRu,
            description: description,
            countries: ['ru'],
            genres: allGenres?.filter((genre) => genreValues.includes(genre.value)).map((genre) => genre.id),
            trailer: trailer,
            year: year,
            rating: rating,
            ratingCount: ratingCount,
            ageRating: ageRating,
            poster: poster,
            duration: duration,
            slogan: slogan,
        }

        try {
            const response = await $auth.post(`${PORT}/movie`, newMovie, {
                headers: {
                    'content-type': 'application/json',
                },
            })

            setSaved(true)
            setNameRu('')
            setNameEn('')
            setDescription('')
            setTrailer('')
            setYear('')
            setRating('')
            setRatingCount('')
            setAgeRating('')
            setPoster('')
            setDuration('')
            setSlogan('')
            setChosenGenres([])
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        getGenres()
    }, [])

    return (
        <div className="container">
            <form onChange={onFormChange} onSubmit={onFormSubmit}>
                <div className={styles.info}>
                    <div>Название</div>
                    <input
                        name="nameRu"
                        className={styles.nameInput}
                        value={nameRu}
                        onChange={(e) => setNameRu(e.target.value)}
                    />
                    <div>Название (eng)</div>
                    <input
                        name="nameEn"
                        className={styles.nameInput}
                        value={nameEn}
                        onChange={(e) => setNameEn(e.target.value)}
                    />
                    <div>Описание</div>
                    <textarea
                        onChange={onTextareaChange}
                        name="description"
                        className={`${styles.textarea} ${styles.nameInput}`}
                        value={description}
                    ></textarea>
                    <div>Трейлер (ссылка)</div>
                    <input
                        name="trailer"
                        className={styles.nameInput}
                        value={trailer}
                        onChange={(e) => setTrailer(e.target.value)}
                    />
                    <div>Год</div>
                    <input
                        name="year"
                        className={styles.nameInput}
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <div>Рейтинг (пример формата: 7.8, 5.05, 9)</div>
                    <input
                        name="rating"
                        className={styles.nameInput}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <div>Количество оценок</div>
                    <input
                        name="ratingCount"
                        className={styles.nameInput}
                        value={ratingCount}
                        onChange={(e) => setRatingCount(e.target.value)}
                    />
                    <div>Ограничение по возрасту (до)</div>
                    <input
                        name="ageRating"
                        className={styles.nameInput}
                        value={ageRating}
                        onChange={(e) => setAgeRating(e.target.value)}
                    />
                    <div>Постер (ссылка)</div>
                    <input
                        name="poster"
                        className={styles.nameInput}
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                    <div>Продолжительность (мин)</div>
                    <input
                        name="duration"
                        className={styles.nameInput}
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <div>Слоган</div>
                    <input
                        name="slogan"
                        className={styles.nameInput}
                        value={slogan}
                        onChange={(e) => setSlogan(e.target.value)}
                    />
                    <div>Жанры</div>
                    {allGenres && (
                        <Select
                            menuShouldScrollIntoView={false}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: '#312b45',
                                    cursor: 'pointer',
                                }),
                                option: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: '#312b45',
                                    cursor: 'pointer',
                                    '&:hover': { ...styles, backgroundColor: '#a5a1b2' },
                                }),
                                menu: (base) => ({
                                    ...base,

                                    paddingBottom: '50px',
                                    backgroundColor: '#100e19',
                                }),
                            }}
                            onChange={(choice) => setChosenGenres(choice)}
                            isMulti
                            name="genres"
                            options={allGenres}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    )}
                </div>

                <button className={styles.button} type="submit">
                    Добавить
                </button>
            </form>

            {error && (
                <div className={styles.error}>
                    Ошибка! Убедитесь что данные введены в правильном формате и попробуйте еще раз
                </div>
            )}
            {loading && <div className={styles.saved}>Загрузка...</div>}
            {requestName && <div className={styles.error}>Введите русское или английское название</div>}
            {saved && <div className={styles.saved}>Сохранено!</div>}
        </div>
    )
}
export default AdminPanelAdd
