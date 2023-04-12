import React from 'react'
import classes from './Button.module.scss'
import cn from 'classnames'

// пока сделал 4 кнопки, соответственно 4 типа, в children все что угодно. Типы будут добавляться дальше, или можем сделать какую-то другую градацию. Этот компонент именно для прямоугольных кнопок, для круглых думаю надо бы сделать отдельный
export interface ButtonProps {
    type: 'paySubscription' | 'watchSubscription' | 'thirtyDays' | 'certificate'
    children?: React.ReactNode
    onClick?: () => void
}

export const Button = ({ type, children, ...props }: ButtonProps) => {
    // classnames с помощью функции cn собирает общий для всех кнопок класс (.button) и тот, который пришел из пропсов ([type])
    const btnClass = cn(classes.button, classes[type])

    return (
        <button type="button" className={btnClass} {...props}>
            {children}
        </button>
    )
}
