import React, { useEffect, useRef, useState } from 'react'
import styles from './ButtonActor.module.scss'
import Link from 'next/link'

export interface ButtonActorProps {
    href?: string
    image: React.ReactNode
    text: string
}

export const ButtonActor = ({ href = '/', image, text }: ButtonActorProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isHovered) {
            buttonRef.current?.classList.add(styles.button_hover)
            textRef.current?.classList.add(styles.text_hover)
        } else {
            buttonRef.current?.classList.remove(styles.button_hover)
            textRef.current?.classList.remove(styles.text_hover)
        }
    }, [isHovered])

    return (
        <Link href={href}>
            <div
                className={styles.container}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <button className={styles.button} ref={buttonRef}>
                    <div className={styles.image}>{image}</div>
                </button>
                <div className={styles.text} ref={textRef}>
                    {text}
                </div>
            </div>
        </Link>
    )
}
