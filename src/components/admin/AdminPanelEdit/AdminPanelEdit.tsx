import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AdminPanelEdit.module.scss'
import React from 'react'
import Select, { MultiValue } from 'react-select'
import { IAdminPanelMovie, IAdminPanelData, IGenre } from '@/types/Component/IMovie'
import { PORT } from '../AdminPanel'
import $auth from '@/http/auth'

const AdminPanelEdit = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [notFound, setNotFound] = useState<boolean>(false)
    const [saved, setSaved] = useState<boolean>(false)
    const [chosenGenres, setChosenGenres] = useState<MultiValue<{ value: string; label: string }>>([])
    const [foundFilm, setFoundFilm] = useState<IAdminPanelMovie | null>(null)
    const [allGenres, setAllGenres] = useState<{ value: string; label: string; id: number }[] | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFoundFilm(null)
        setError(false)
        setNotFound(false)
        setSaved(false)
        setInputValue(e.target.value)
    }

    const searchSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const movieResponse = await $auth.get(`${PORT}/movie/${inputValue}`)

            const movieData = (await movieResponse.data) as IAdminPanelData
            if (movieData.errors.length !== 0) {
                throw new Error('error')
            } else {
                setFoundFilm(movieData.movie)
                setChosenGenres(
                    movieData.movie.genres.map((genre) => {
                        return {
                            label: genre.nameRu,
                            value: genre.nameEn,
                        }
                    })
                )
            }

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
        } catch (error) {
            setError(true)
        }
    }

    const onFormEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const updatedRuName = formData.get('nameRu')
        const updatedEnName = formData.get('nameEn')
        const genreValues = chosenGenres.map((genre) => genre.value)

        const updatedFilm = {
            nameRu: updatedRuName,
            nameEn: updatedEnName,
            description: foundFilm?.description,
            trailer: foundFilm?.trailer,
            similarMovies: foundFilm?.similarMovies?.map((film) => film.id),
            year: foundFilm?.year,
            rating: foundFilm?.rating,
            ratingCount: foundFilm?.ratingCount,
            ageRating: foundFilm?.ageRating,
            poster: foundFilm?.poster,
            duration: foundFilm?.duration,
            slogan: foundFilm?.slogan,
            genres: allGenres?.filter((genre) => genreValues.includes(genre.value)).map((genre) => genre.id),
            countries: foundFilm?.countries.map((country) => country.shortName),
        }

        try {
            const res = await $auth.put(`${PORT}/movie/${inputValue}`, updatedFilm)
        } catch (error) {
            console.log(error)
        }

        // на этом этапе отправляем обновленные данные на бэкенд
        setSaved(true)
        setFoundFilm(null)
    }

    return (
        <div className="container">
            <form onSubmit={searchSubmitHandler} className={styles.wrapper}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Введите ID фильма"
                    value={inputValue}
                    onChange={onChangeHandler}
                />
                <button className={styles.button} type="submit">
                    Найти
                </button>
            </form>
            {error && <div className={styles.error}>Ошибка! Попробуйте еще раз</div>}
            {notFound && <div className={styles.error}>Ничего не найдено!</div>}
            {saved && <div className={styles.saved}>Сохранено!</div>}
            {foundFilm && allGenres && (
                <form onSubmit={onFormEdit}>
                    <div className={styles.info}>
                        <div>ID</div>
                        <div>{foundFilm.id}</div>
                        <div>Название</div>
                        <input name="nameRu" className={styles.nameInput} defaultValue={foundFilm.nameRu} />
                        <div>Название (eng)</div>
                        <input name="nameEn" className={styles.nameInput} defaultValue={foundFilm.nameEn} />
                        <div>Описание</div>
                        <div>{foundFilm.description}</div>
                        <div>Жанры</div>

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
                            defaultValue={allGenres.filter((genre) =>
                                foundFilm.genres.map((elem) => elem.nameEn).includes(genre.value)
                            )}
                            onChange={(choice) => setChosenGenres(choice)}
                            isMulti
                            name="genres"
                            options={allGenres}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>

                    <button className={styles.button} type="submit">
                        Сохранить
                    </button>
                </form>
            )}
        </div>
    )
}
export default AdminPanelEdit
