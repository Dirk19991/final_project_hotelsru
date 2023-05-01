import React, { ChangeEvent, useState } from 'react'
import styles from './AuthorizationForm.module.scss'
import Link from 'next/link'
import { Button } from '@/stories/Button/ButtonStandard'

const AuthorizationForm = () => {
    const [auth, setAuth] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setAuth(value)
    }

    return (
        <div className={styles.auth}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <p>Войдите или зарегистрируйтесь</p>
                        <span>
                            чтобы пользоваться сервисом на любом устройстве
                        </span>
                    </div>
                    <form className={styles.form}>
                        <label className={styles.label}>
                            <input
                                className={styles.inputAuth}
                                placeholder=" "
                                id="auth"
                                type="text"
                                value={auth}
                                onChange={handleChange}
                            />
                            <label className={styles.float} htmlFor="auth">
                                Введите email
                            </label>
                        </label>
                        <Button
                            onClick={() => {}}
                            type="watchSubscription"
                            label="Продолжить"
                        />

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
        </div>
    )
}

export default AuthorizationForm
