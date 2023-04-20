import React from 'react'
import styles from './Filters.module.scss'
import FilterSelect from '../../stories/FilterSelect/FilterSelect'
import {
    CountriesSelect,
    GenreSelect,
} from '@/stories/FilterSelect/FilterSelect.stories'

// для примера
// тут для сторибука нужно будет экспортировать соответвующие массивы стран, рейтингов, когда они появятся
export const genresArr = [
    'Артхаус',
    'Биография',
    'Боевики',
    'Вестерн',
    'Военные',
    'Детективы',
    'Для детей',
    'Документальные',
    'Драмы',
    'Зарубежные',
    'Исторические',
    'Катастрофы',
    'Комедии',
    'Криминал',
    'Мелодрамы',
    'Мистические',
    'Музыкальные',
    'По комиксам',
    'Приключения',
    'Русские',
    'Семейные',
    'Советские',
    'Спорт',
    'Триллеры',
    'Ужасы',
    'Фантастика',
    'Фэнтези',
]
interface IFilters {
    filterGenre: number | null
    filterCountry: number | null
    setFilterGenre: (id: number | null) => void
    setFilterCountry: (id: number | null) => void
}

const Filters = ({
    setFilterGenre,
    setFilterCountry,
    filterGenre,
    filterCountry,
}: IFilters) => {
    const handleReset = () => {
        setFilterGenre(null)
        setFilterCountry(null)
    }
    return (
        <div className={styles.filters}>
            <div className="container">
                <div className={styles.filters__wrapper}>
                    <div className={styles.filters__selects}>
                        <FilterSelect
                            title={GenreSelect.args?.title!}
                            values={GenreSelect.args?.values!}
                            filter={filterGenre}
                            setFilter={setFilterGenre}
                        />
                        <FilterSelect
                            title={CountriesSelect.args?.title!}
                            values={CountriesSelect.args?.values!}
                            filter={filterCountry}
                            setFilter={setFilterCountry}
                        />
                        {/* <FilterSelect title="Рейтинг" values={genresArr} /> */}
                    </div>
                    <span className={styles.reset} onClick={handleReset}>
                        Сбросить фильтры
                    </span>{' '}
                    {/* временно для визуала*/}
                </div>
            </div>
        </div>
    )
}

export default Filters
