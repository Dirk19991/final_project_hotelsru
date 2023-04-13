import React from 'react'
import Image from 'next/image'
import styles from './BottomMenu.module.scss'
import Link from 'next/link'
import { Button } from '@/stories/Button/ButtonStandard'
import { ButtonRound } from '@/stories/Button/ButtonRound'

const BottomMenu = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    <li>О нас</li>
                    <li>
                        {' '}
                        <Link href="/">О компании</Link>
                    </li>
                    <li>
                        <Link href="/">Вакансии</Link>
                    </li>
                    <li>
                        <Link href="/">Программа бета-тестирования</Link>
                    </li>
                    <li>
                        <Link href="/">Информация для партнёров</Link>
                    </li>
                    <li>
                        <Link href="/">Размещение рекламы</Link>
                    </li>
                    <li>
                        <Link href="/">Пользовательское соглашение</Link>
                    </li>
                    <li>
                        <Link href="/">Политика конфиденциальности</Link>
                    </li>
                    <li>
                        <Link href="/">Комплаенс</Link>
                    </li>
                </ul>

                <div>
                    <ul className={styles.list}>
                        <li>Разделы</li>
                        <li>
                            {' '}
                            <Link href="/">Мой Иви</Link>
                        </li>
                        <li>
                            <Link href="/">Что нового</Link>
                        </li>
                        <li>
                            <Link href="/">Фильмы</Link>
                        </li>
                        <li>
                            <Link href="/">Сериалы</Link>
                        </li>
                        <li>
                            <Link href="/">Мультфильмы</Link>
                        </li>
                        <li>
                            <Link href="/">TV+</Link>
                        </li>
                        <li>
                            <Link href="/">Что посмотреть</Link>
                        </li>
                        <li className={styles.violet}>
                            <Link href="/">Активация сертификата</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div className={styles.support}>Служба поддержки</div>
                    <div className={styles.help}>
                        <div>Мы всегда готовы вам помочь.</div>
                        <div>Наши операторы онлайн 24/7</div>
                    </div>

                    <Button
                        href="/"
                        label="Написать в чате"
                        onClick={() => {}}
                        type="chat"
                    />
                    <div className={styles.flex}>
                        <ButtonRound
                            height={20}
                            href="/"
                            onClick={() => {}}
                            src="/icons/mail.svg"
                            type="square"
                            width={20}
                        />
                        <ButtonRound
                            height={20}
                            href="/"
                            onClick={() => {}}
                            src="/icons/phone.svg"
                            type="square"
                            width={20}
                        />
                    </div>
                    <div className={styles.white}>ask.ivi.ru</div>
                    <div>Ответы на вопросы</div>
                </div>
                <div className={styles.speaker}>
                    <ButtonRound
                        height={56}
                        href="/"
                        onClick={() => {}}
                        src="/icons/speaker.svg"
                        type="bigViolet"
                        width={56}
                    />
                    <div>
                        Смотрите фильмы, сериалы и мультфильмы без рекламы
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomMenu
