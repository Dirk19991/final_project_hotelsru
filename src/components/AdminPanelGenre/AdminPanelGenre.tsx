import styles from './AdminPanelGenre.module.scss'
import Select, { GroupBase, SingleValue } from 'react-select'
import { FormEvent, useState } from 'react'

const AdminPanelGenre = () => {
    const genres: { value: string; label: string }[] = [
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

    const [genre, setGenre] = useState<SingleValue<string>>('триллер')
    const [inputValue, setInputValue] = useState<string>('триллер')
    const [allGenres, setAllGenres] = useState(genres)

    const selectFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const editFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setAllGenres((prev) => {
            return prev.map((elem) =>
                elem.value === genre
                    ? {
                          value: inputValue,
                          label: inputValue,
                      }
                    : elem
            )
        })
    }

    return (
        <>
            <form onSubmit={selectFormHandler} className={styles.wrapper}>
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
                    defaultValue={genres[0]}
                    onChange={(choice) => {
                        setGenre(choice!.label)
                        setInputValue(choice!.label)
                    }}
                    options={allGenres}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </form>
            <form onSubmit={editFormHandler} className={styles.wrapper}>
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
        </>
    )
}
export default AdminPanelGenre
