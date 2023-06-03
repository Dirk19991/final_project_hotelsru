import React, { FC } from 'react'
import styles from './AlterntaiveHeader.module.scss'
import { useRouter } from 'next/router'

interface IAlternativeHeader {
    title: string
    close?: () => void
}

const AlternativeHeader: FC<IAlternativeHeader> = ({ title, close }) => {
    const { push } = useRouter()

    return (
        <header>
            <div className={styles.wrapper}>
                <div></div>
                <div className={styles.title}>{title}</div>
                <div className={styles.back} onClick={close || (() => push('/'))} data-testid="close-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default AlternativeHeader
