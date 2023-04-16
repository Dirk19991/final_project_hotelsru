import React, { useState } from 'react'
import styles from './Select.module.scss'
import cn from 'classnames'

interface ISelect {
    title: string
    values: string[]
}

const Select = (props: ISelect): JSX.Element => {
    const [isOpen, toggleIsOpen] = useState(false)
    const [choosenValue, setChoosenValue] = useState('')

    const handleClick = () => {
        toggleIsOpen((prev) => !prev)
    }

    return (
        <div className={styles.select} onClick={handleClick}>
            <div className={cn(styles.select__title, isOpen && styles.active)}>
                <h5>{props.title}</h5>
                {choosenValue !== '' && <span>{choosenValue}</span>}
            </div>
            {isOpen && 
                <div className={styles.select__content}>
                    {props.values.map((el, index) => (
                        <div key={index} onClick={() => setChoosenValue(el)}>
                            <p>{el}</p>
                            {choosenValue === el && <span></span>}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Select
