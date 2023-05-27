import styles from './AdminPanelGenre.module.scss'
import Select, { GroupBase, SingleValue } from 'react-select'
import { FormEvent, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { PORT } from '../AdminPanel/AdminPanel'
import { IGenre } from '@/types/ComponentProps/IMovie'

const AdminPanelGenre = () => {
    const [allGenres, setAllGenres] = useState<{ value: string; label: string; id: number }[] | null>(null)
    const [chosenGenre, setChosenGenre] = useState<SingleValue<string>>('')
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [saved, setSaved] = useState<boolean>(false)

    const fetchGenres = async () => {
        try {
            const genreResponse = await axios.get(`${PORT}genres`)
            const genreData = (await genreResponse.data) as IGenre[]
            const sortedGenreData = genreData
                .map((genre) => {
                    return {
                        label: genre.nameRu,
                        value: genre.nameEn,
                        id: genre.id,
                    }
                })
                .sort((a, b) => (a.label > b.label ? 1 : -1))
            setAllGenres(sortedGenreData)
            setInputValue(sortedGenreData[0].label)
            setChosenGenre(sortedGenreData && sortedGenreData[0].label)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        fetchGenres()
    }, [])

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = allGenres?.filter((genre) => genre.label === chosenGenre)[0].id
        const updatedGenre = {
            nameRu: inputValue,
            nameEn: allGenres?.filter((genre) => genre.label === chosenGenre)[0].value,
        }
        const response = await axios.put(`${PORT}genres/${id}`, updatedGenre)
        fetchGenres()
        setSaved(true)
    }

    const onChangeHandler = (
        choice: SingleValue<{
            value: string
            label: string
            id: number
        }>
    ) => {
        setChosenGenre(choice!.label)
        setInputValue(choice!.label)
        setSaved(false)
        setError(false)
    }

    return (
        <>
            {allGenres && (
                <form onSubmit={submitForm} className={styles.wrapper}>
                    <Select
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                backgroundColor: '#312b45',
                                color: 'white',
                            }),
                            option: (baseStyles, state) => ({
                                ...baseStyles,
                                backgroundColor: '#312b45',
                                fontWeight: 700,
                                color: 'white',
                            }),

                            singleValue: (baseStyles, state) => ({
                                ...baseStyles,
                                backgroundColor: '#312b45',
                                fontWeight: 700,
                                color: 'white',
                            }),
                        }}
                        value={allGenres && allGenres.filter((genre) => genre.label === chosenGenre)[0]}
                        onChange={onChangeHandler}
                        options={allGenres}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                    <input
                        name="genre"
                        className={styles.input}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className={styles.button} type="submit">
                        Сохранить
                    </button>
                </form>
            )}
            {error && <div className={styles.error}>Ошибка! Попробуйте еще раз</div>}

            {saved && <div className={styles.saved}>Сохранено!</div>}
        </>
    )
}
export default AdminPanelGenre
