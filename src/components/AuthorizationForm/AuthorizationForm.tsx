import React from 'react'
import styles from './AuthorizationForm.module.scss'
import Link from 'next/link'

const AuthorizationForm = () => {
    return (
        <div className={styles.auth}>
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <p>Войдите или зарегистрируйтесь</p>
                    <span>чтобы пользоваться сервисом на любом устройстве</span>
                </div>
                <form className={styles.form}>
                    

                    <div className={styles.input}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <input type="text" name="email"/>
                        <label htmlFor="email">{"Введите email"}</label>
                    </div>

                    <button>Продолжить</button>

                    <div className={styles.socials}>
                        <button>Google</button>
                        <button>VK</button>
                    </div>
                </form>
                <div className={styles.agreement}>
                    <p>Нажимая «Продолжить», я соглашаюсь</p>
                    <span>
                        с{' '}
                        <Link href="https://www.ivi.ru/info/confidential">
                            Политикой конфиденциальности
                        </Link>
                    </span>
                    <span>
                        и{' '}
                        <Link href="https://www.ivi.ru/info/agreement">
                            Пользовательским соглашением
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AuthorizationForm
