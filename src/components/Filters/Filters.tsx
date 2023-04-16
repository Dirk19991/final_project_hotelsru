import React from 'react'
import styles from './Filters.module.scss'
import cn from 'classnames'
import Select from '../Select/Select'

// для примера
const arr = [
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
                        <Select title="Жанры" values={arr} />
                        <Select title="Страны" values={arr} />
                        <Select title="Рейтинг" values={arr} />
                    </div>
                    <span>X Сбросить фильтры</span> {/* временно для визуала*/}
                </div>
            </div>
        </div>
    )
}

export default Filters
