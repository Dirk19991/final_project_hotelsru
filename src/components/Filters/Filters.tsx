import React from 'react'
import styles from './Filters.module.scss'
import FilterSelect from '../../stories/FilterSelect/FilterSelect'

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
const Filters = () => {
    return (
        <div className={styles.filters}>
            <div className="container">
                <div className={styles.filters__wrapper}>
                    <div className={styles.filters__selects}>
                        <FilterSelect title="Жанры" values={genresArr} />
                        <FilterSelect title="Страны" values={genresArr} />
                        <FilterSelect title="Рейтинг" values={genresArr} />
                    </div>
                    <span>X Сбросить фильтры</span> {/* временно для визуала*/}
                </div>
            </div>
        </div>
    )
}

export default Filters
