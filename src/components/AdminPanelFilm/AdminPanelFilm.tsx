import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AdminPanelFilm.module.scss'
import data from '@/data/mockData'
import { ISmallSliderMovie } from '@/types/ComponentProps/IMovie'
import React from 'react'
import Select, { MultiValue } from 'react-select'

const AdminPanelFilm = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [notFound, setNotFound] = useState<boolean>(false)
    const [saved, setSaved] = useState<boolean>(false)
    const [chosenGenres, setChosenGenres] = useState<
        MultiValue<{
            value: string
            label: string
        }>
    >([])
    const [foundFilm, setFoundFilm] = useState<ISmallSliderMovie | null>(null)

    const genres = [
        { value: 'триллер', label: 'триллер' },
        { value: 'драма', label: 'драма' },
        { value: 'спорт', label: 'спорт' },
        { value: 'комедия', label: 'комедия' },
        { value: 'криминал', label: 'криминал' },
        { value: 'биография', label: 'биография' },
        { value: 'военный', label: 'военный' },
        { value: 'история', label: 'история' },
        { value: 'фантастика', label: 'фантастика' },
        { value: 'приключения', label: 'приключения' },
        { value: 'семейный', label: 'семейный' },
        { value: 'мюзикл', label: 'мюзикл' },
        { value: 'мелодрама', label: 'мелодрама' },
        { value: 'боевик', label: 'боевик' },
        { value: 'фэнтези', label: 'фэнтези' },
        { value: 'ужасы', label: 'ужасы' },
        { value: 'детектив', label: 'детектив' },
    ]

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFoundFilm(null)
        setError(false)
        setNotFound(false)
        setSaved(false)
        setInputValue(e.target.value)
    }

    const searchSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let filmsData = data as ISmallSliderMovie[]
        if (isNaN(+inputValue)) {
            setError(true)
            return
        } else {
            let film = filmsData.find((film) => film.id === +inputValue)
            if (film) {
                setFoundFilm(film)
                return
            } else {
                setNotFound(true)
                return
            }
        }
    }

    const editSubmitHandler = (e: any) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const genres = chosenGenres ? chosenGenres : foundFilm?.genre

        const updatedFilm = {
            ...foundFilm,
            name: formData.get('name'),
            genre: genres,
        }

        // на этом этапе отправляем обновленные данные на бэкенд
        console.log(updatedFilm)
        setSaved(true)
        setFoundFilm(null)
    }

    return (
        <>
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
            {error && (
                <div className={styles.error}>Ошибка! Некорректный ID</div>
            )}
            {notFound && <div className={styles.error}>Ничего не найдено!</div>}
            {saved && <div className={styles.saved}>Сохранено!</div>}
            {foundFilm && (
                <form onSubmit={editSubmitHandler}>
                    <div className={styles.info}>
                        <div>ID</div>
                        <div>{foundFilm.id}</div>
                        <div>Название</div>
                        <input
                            name="name"
                            className={styles.nameInput}
                            defaultValue={foundFilm.name}
                        />
                        <div>Описание</div>
                        <div>{foundFilm.description}</div>
                        <div>Жанры</div>

                        <Select
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: '#312b45',
                                }),
                                option: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: '#312b45',
                                }),
                            }}
                            defaultValue={genres.filter((genre) =>
                                foundFilm.genre
                                    .map((elem) => elem.name)
                                    .includes(genre.value)
                            )}
                            onChange={(choice) => setChosenGenres(choice)}
                            isMulti
                            name="genres"
                            options={genres}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>

                    <button className={styles.button} type="submit">
                        Сохранить
                    </button>
                </form>
            )}
        </>
    )
}
export default AdminPanelFilm
