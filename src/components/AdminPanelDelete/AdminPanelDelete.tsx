import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AdminPanelDelete.module.scss'
import React from 'react'
import axios from 'axios'
import { IAdminPanelMovie, IAdminPanelData } from '@/types/ComponentProps/IMovie'
import { PORT } from '../AdminPanel/AdminPanel'

const AdminPanelFilm = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [notFound, setNotFound] = useState<boolean>(false)
    const [saved, setSaved] = useState<boolean>(false)
    const [foundFilm, setFoundFilm] = useState<IAdminPanelMovie | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFoundFilm(null)
        setError(false)
        setNotFound(false)
        setSaved(false)
        setInputValue(e.target.value)
    }

    const searchSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSaved(false)
        try {
            const movieResponse = await axios.get(`${PORT}movie/${inputValue}`)
            const movieData = (await movieResponse.data) as IAdminPanelData
            if (movieData.errors.length !== 0) {
                throw new Error('error')
            } else {
                setFoundFilm(movieData.movie)
            }
        } catch (error) {
            setError(true)
        }
    }

    const editSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await axios.delete(`${PORT}movie/${inputValue}`)
        } catch (error) {
            console.log(error)
        }

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
            {saved && <div className={styles.saved}>Удалено!</div>}
            {foundFilm && (
                <form onSubmit={editSubmitHandler}>
                    <div className={styles.info}>
                        <div>ID</div>
                        <div>{foundFilm.id}</div>
                        <div>Название</div>
                        <input name="nameRu" className={styles.nameInput} defaultValue={foundFilm.nameRu} />
                        <div>Название (eng)</div>
                        <input name="nameEn" className={styles.nameInput} defaultValue={foundFilm.nameEn} />
                    </div>

                    <button className={styles.button} type="submit">
                        Удалить
                    </button>
                </form>
            )}
        </div>
    )
}
export default AdminPanelFilm
