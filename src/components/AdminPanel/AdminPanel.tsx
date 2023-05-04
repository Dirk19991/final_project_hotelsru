import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AdminPanel.module.scss'
import data from '@/data/mockData'
import { ISmallSliderMovie } from '@/types/ComponentProps/IMovie'

const AdminPanel = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [notFound, setNotFound] = useState<boolean>(false)
    const [saved, setSaved] = useState<boolean>(false)
    const [foundFilm, setFoundFilm] = useState<ISmallSliderMovie | null>(null)

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

        const genres = foundFilm?.genre
            .map((elem) => {
                return {
                    ...elem,
                    name: formData.get(elem.name),
                }
            })
            .filter((elem) => elem.name !== '')

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
                        <div className={styles.genres}>
                            {foundFilm.genre.map((elem) => (
                                <input
                                    name={elem.name}
                                    className={styles.genreInput}
                                    defaultValue={elem.name}
                                />
                            ))}
                        </div>
                    </div>

                    <button className={styles.button} type="submit">
                        Сохранить
                    </button>
                </form>
            )}
        </div>
    )
}
export default AdminPanel
