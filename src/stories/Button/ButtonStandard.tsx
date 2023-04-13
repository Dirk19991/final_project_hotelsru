import React from 'react'
import classes from './ButtonStandard.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { __String } from 'typescript'

// пока сделал 5 кнопок, соответственно 4 типа, в children все что угодно. Типы будут добавляться дальше, или можем сделать какую-то другую градацию. Этот компонент именно для прямоугольных кнопок, для круглых думаю надо бы сделать отдельный
export interface ButtonProps {
    type:
        | 'paySubscription'
        | 'watchSubscription'
        | 'thirtyDays'
        | 'certificate'
        | 'chat'
    src?: string
    width?: number
    height?: number
    onClick?: () => void
    label?: string
    sublabel?: string
    href: string
}

export const Button = ({
    type,
    label,
    src,
    width,
    height,
    href,
}: ButtonProps) => {
    // classnames с помощью функции cn собирает общий для всех кнопок класс (.button) и тот, который пришел из пропсов ([type])
    const btnClass = cn(classes.button, classes[type])

    // в Next надо использовать их собственный компонент Image для оптимизации. В нем желательно указывать размеры картинки width/height. Здесь мы условно рендерим иконку если в пропсах пришел src, если нет то рендерим пустую строку
    return (
        <Link href={href}>
            <button type="button" className={btnClass}>
                {src ? (
                    <Image
                        height={height}
                        width={width}
                        src={src}
                        alt={src}
                    ></Image>
                ) : (
                    ''
                )}

                {label}
            </button>
        </Link>
    )
}
