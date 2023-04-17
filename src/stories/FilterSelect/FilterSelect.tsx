import React, { useState } from 'react'
import styles from './FilterSelect.module.scss'
import cn from 'classnames'

interface SelectProps {
    title: string
    values: string[]
}

const FilterSelect = (props: SelectProps): JSX.Element => {
    const [isOpen, toggleIsOpen] = useState(false)
    const [chosenValue, setChosenValue] = useState('')

    const handleClick = () => {
        toggleIsOpen((prev) => !prev)
    }

    return (
        <div className={styles.select} onClick={handleClick}>
            <div className={cn(styles.select__title, isOpen && styles.active)}>
                <h5>{props.title}</h5>
                {chosenValue !== '' && <span>{chosenValue}</span>}
            </div>
            {isOpen && (
                <div className={styles.select__content}>
                    {props.values.map((el, index) => (
                        <div key={index} onClick={() => setChosenValue(el)}>
                            <p>{el}</p>
                            {chosenValue === el && <span></span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilterSelect
