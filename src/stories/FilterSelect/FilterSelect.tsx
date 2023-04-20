import React, { useEffect, useState } from 'react'
import styles from './FilterSelect.module.scss'
import cn from 'classnames'

interface IValue {
    id: number
    name: string
    link: string
}

interface SelectProps {
    title: string
    values: IValue[]
    filter: number | null
    setFilter: (id: number) => void
}

const FilterSelect = (props: SelectProps): JSX.Element => {
    const [isOpen, toggleIsOpen] = useState(false)
    const [chosenValue, setChosenValue] = useState('')

    const handleClick = () => {
        toggleIsOpen((prev) => !prev)
    }

    const handleSelect = (el: IValue) => {
        setChosenValue(el.name)
        props.setFilter(el.id)
    }

    useEffect(() => {
        if (props.filter === null) {
            setChosenValue('')
        }
    }, [props.filter])

    return (
        <div className={styles.select} onClick={handleClick}>
            <div className={cn(styles.select__title, isOpen && styles.active)}>
                <h5>{props.title}</h5>
                {chosenValue !== '' && <span>{chosenValue}</span>}
            </div>
            {isOpen && (
                <div
                    className={styles.select__content}
                    onMouseLeave={() => toggleIsOpen(false)}
                >
                    {props.values.map((el) => (
                        <div key={el.id} onClick={() => handleSelect(el)}>
                            <p>{el.name}</p>
                            {chosenValue === el.name && <span></span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilterSelect
