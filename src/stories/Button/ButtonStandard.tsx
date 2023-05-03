import React from 'react'
import classes from './ButtonStandard.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

// пока сделал 5 кнопок, соответственно 4 типа, в children все что угодно. Типы будут добавляться дальше, или можем сделать какую-то другую градацию.
// Этот компонент именно для прямоугольных кнопок, для круглых думаю надо бы сделать отдельный
export interface ButtonProps {
    type:
        | 'paySubscription'
        | 'watchSubscription'
        | 'thirtyDays'
        | 'bigThirtyDays'
        | 'register'
        | 'certificate'
        | 'chat'
        | 'headerThirtyDays'
        | 'watch'
        | 'rating'
        | 'showMore'
    src?: string
    width?: number
    height?: number
    onClick?: () => void
    label?: string
    sublabel?: string
    href?: string
    disabled?: boolean | undefined
}

export const Button = ({
    type,
    label,
    src,
    width,
    height,
    href,
    onClick,
    disabled,
}: ButtonProps) => {
    // classnames с помощью функции cn собирает общий для всех кнопок класс (.button) и тот, который пришел из пропсов ([type])
    const btnClass = cn(classes.button, classes[type])

    // в Next надо использовать их собственный компонент Image для оптимизации. В нем желательно указывать размеры картинки width/height.
    // Здесь мы условно рендерим иконку если в пропсах пришел src, если нет то рендерим пустую строку
    return (
        <>
            {href && (
                <Link href={href}>
                    <button
                        onClick={onClick}
                        type="button"
                        className={btnClass}
                        disabled={disabled !== undefined && disabled}
                    >
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
            )}
            {!href && (
                <button
                    onClick={onClick}
                    type="button"
                    className={btnClass}
                    disabled={disabled !== undefined && disabled}
                >
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
            )}
        </>
    )
}
