import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react'
import styles from './AdminPanelAdd.module.scss'
import React from 'react'
import Select, { MultiValue } from 'react-select'
import axios from 'axios'
import { IAdminPanelMovie, IAdminPanelData, IGenre } from '@/types/ComponentProps/IMovie'
import { PORT } from '../AdminPanel/AdminPanel'

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
    const [chosenGenres, setChosenGenres] = useState<MultiValue<{ value: string; label: string }>>([])
    const [allGenres, setAllGenres] = useState<{ value: string; label: string; id: number }[] | null>(null)

    function checkInput(input: string, fn: () => void, regex: RegExp) {
        let invalidChars = /[^0-9]/gi
        if (regex.test(input)) {
            return
        }
        fn()
    }

    function onTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.target.style.height = ''
        e.target.style.height = Math.max(e.target.scrollHeight, 40) + 'px'
        setDescription(e.target.value)
    }

    function onFormChange(e: React.ChangeEvent<HTMLFormElement>) {
        setSaved(false)
        setError(false)
    }

    const getGenres = async () => {
        try {
            const genreResponse = await axios.get(`${PORT}genres`)
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
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        getGenres()
    }, [])

    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const genreValues = chosenGenres.map((genre) => genre.value)

        const newMovie = {
            nameRu: nameRu,
            nameEn: nameEn,
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

        console.log(newMovie)

        try {
            const response = await axios.post(`${PORT}movie/`, newMovie)
            console.log(response)
        } catch (error) {
            console.log(error)
        }

        setSaved(true)
    }

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
                        onChange={(e) => checkInput(e.target.value, () => setYear(e.target.value), /[^0-9]/gi)}
                    />
                    <div>Рейтинг (пример формата: 7.8, 5.05, 9)</div>
                    <input
                        name="rating"
                        className={styles.nameInput}
                        value={rating}
                        onChange={(e) => checkInput(e.target.value, () => setRating(e.target.value), /[^0-9]\./gi)}
                    />
                    <div>Количество оценок</div>
                    <input
                        name="ratingCount"
                        className={styles.nameInput}
                        value={ratingCount}
                        onChange={(e) => {
                            checkInput(e.target.value, () => setRatingCount(e.target.value), /[^0-9]/gi)
                        }}
                    />
                    <div>Ограничение по возрасту (до)</div>
                    <input
                        name="ageRating"
                        className={styles.nameInput}
                        value={ageRating}
                        onChange={(e) => checkInput(e.target.value, () => setAgeRating(e.target.value), /[^0-9]/gi)}
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
                        onChange={(e) => checkInput(e.target.value, () => setDuration(e.target.value), /[^0-9]/gi)}
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
                            defaultValue={allGenres[0]}
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

            {error && <div className={styles.error}>Ошибка! Попробуйте еще раз</div>}
            {saved && <div className={styles.saved}>Сохранено!</div>}
        </div>
    )
}
export default AdminPanelAdd
