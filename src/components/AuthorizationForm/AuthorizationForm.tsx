import React, { ChangeEvent, useState } from 'react'
import styles from './AuthorizationForm.module.scss'
import Link from 'next/link'
import { Button } from '@/stories/Button/ButtonStandard'
import cn from 'classnames'

const AuthorizationForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

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
                        <label className={cn(styles.label, styles.email)}>
                            <input
                                className={styles.inputAuth}
                                placeholder=" "
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className={styles.float} htmlFor="email">
                                Введите email
                            </label>
                        </label>
                        <label className={cn(styles.label, styles.password)}>
                            <input
                                className={styles.inputAuth}
                                placeholder=" "
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className={styles.float} htmlFor="password">
                                Введите пароль
                            </label>
                        </label>
                        <Button
                            onClick={() => {}}
                            type="watchSubscription"
                            label="Продолжить"
                            disabled={true}
                        />
                        <div className={styles.socials}>
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#f5bc00"
                                        d="M43.6,20.1H42V20H24v8h11.3c-1.6,4.7-6.1,8-11.3,8c-6.6,0-12-5.4-12-12s5.4-12,12-12c3.1,0,5.8,1.2,8,3l5.7-5.7	C34,6.1,29.3,4,24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20C44,22.7,43.9,21.4,43.6,20.1z"
                                    />
                                    <path
                                        fill="#6c19ff"
                                        d="M43.6,20.1L43.6,20.1L42,20H24v8h11.3c-0.8,2.2-2.2,4.2-4.1,5.6c0,0,0,0,0,0l6.2,5.2C37,39.2,44,34,44,24	C44,22.7,43.9,21.4,43.6,20.1z"
                                    />
                                    <path
                                        fill="#3ddab4"
                                        d="M24,44c5.2,0,9.9-2,13.4-5.2l-6.2-5.2c-2,1.5-4.5,2.4-7.2,2.4c-5.2,0-9.6-3.3-11.3-7.9l-6.5,5	C9.5,39.6,16.2,44,24,44z"
                                    />
                                    <path
                                        fill="#f55376"
                                        d="M6.3,14.7l6.6,4.8C14.7,15.1,19,12,24,12c3.1,0,5.8,1.2,8,3l5.7-5.7C34,6.1,29.3,4,24,4	C16.3,4,9.7,8.3,6.3,14.7z"
                                    />
                                    <path
                                        fill="#2100c4"
                                        d="M26.6,35.7l6.8,6c1.5-0.8,2.9-1.8,4.1-2.9l-6.2-5.2C29.9,34.6,28.3,35.3,26.6,35.7z"
                                    />
                                    <path
                                        fill="#eb0000"
                                        d="M9.2,10.6c-1.1,1.2-2.1,2.6-2.9,4.1l3.9,2.9l2.6,1.9c0.6-1.6,1.6-3,2.8-4.1L9.2,10.6z"
                                    />
                                </svg>
                                Google
                            </button>
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                >
                                    <linearGradient
                                        id="c7KC3Nc5k7hJ0awmj858~a"
                                        x1="9.766"
                                        x2="37.851"
                                        y1="5.625"
                                        y2="41.881"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0" stop-color="#33bef0" />
                                        <stop offset="1" stop-color="#0a85d9" />
                                    </linearGradient>
                                    <path
                                        fill="url(#c7KC3Nc5k7hJ0awmj858~a)"
                                        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                                    />
                                    <path
                                        d="M31.411,34c-1.185,0-1.771-0.77-2.584-1.834c-0.313-0.412-0.698-0.917-1.212-1.514	c-0.802-0.937-1.324-1.343-1.616-1.519v2.773C25.999,34,24.002,34,23.149,34c-3.154,0-6.549-2.069-9.081-5.535	C10.747,23.922,10,19.844,10,18.774C10,17.68,10.724,17,11.89,17h2.644c1.544,0,1.946,1.231,2.119,1.756	c0.78,2.614,1.707,4.458,2.348,5.447v-2.866c-0.045-0.803-0.27-1.112-0.508-1.439C18.285,19.614,18,19.225,18,18.641	C18,17.721,18.711,17,19.619,17h4.648C24.788,17,26,17.196,26,19.014v4.821c0.043-0.04,0.092-0.089,0.149-0.15	c1.738-2.049,3.32-5.287,3.336-5.319C29.883,17.477,30.592,17,31.531,17h2.618c1.231,0,1.816,0.795,1.85,1.584	c0.01,0.237-0.026,0.491-0.107,0.753c-0.199,0.989-1.313,2.947-3.603,6.3l-0.192,0.286c-0.014,0.023-0.033,0.056-0.053,0.09	c0.006,0.008,0.011,0.016,0.018,0.025c0.283,0.405,0.99,1.259,1.458,1.824c1.118,1.351,2.116,2.883,2.372,3.645	c0.082,0.303,0.113,0.537,0.108,0.766C35.976,33.134,35.357,34,34.029,34H31.411z"
                                        opacity=".05"
                                    />
                                    <path
                                        d="M31.411,33.5c-0.937,0-1.407-0.616-2.187-1.638c-0.318-0.418-0.709-0.93-1.229-1.537	c-1.451-1.694-2.11-1.826-2.278-1.826c-0.12,0-0.177,0.009-0.2,0.014c0.012,0.013-0.018,0.125-0.018,0.42v2.971	c0,1.323-0.939,1.594-2.35,1.594c-2.995,0-6.239-1.993-8.678-5.33c-3.242-4.436-3.972-8.368-3.972-9.396	c0-0.821,0.493-1.274,1.39-1.274h2.644c1.09,0,1.42,0.729,1.644,1.412c1.176,3.938,2.731,6.314,3.29,6.569	c0.017-0.086,0.033-0.243,0.033-0.521v-3.623c-0.054-0.979-0.346-1.379-0.604-1.734C18.71,19.348,18.5,19.06,18.5,18.641	c0-0.65,0.481-1.141,1.119-1.141h4.648c0.817,0,1.232,0.509,1.232,1.514v5.185c0,0.257,0.157,0.303,0.164,0.304	c0.227-0.003,0.4-0.003,0.848-0.473c1.798-2.118,3.409-5.415,3.425-5.448c0.318-0.713,0.856-1.082,1.595-1.082h2.618	c0.962,0,1.327,0.571,1.35,1.105c0.008,0.179-0.021,0.376-0.085,0.584c-0.255,1.25-2.142,4.12-3.538,6.166	c-0.092,0.135-0.195,0.29-0.195,0.29c-0.075,0.129-0.178,0.305-0.182,0.379c-0.001,0.025,0.012,0.104,0.156,0.306	c0.286,0.41,0.976,1.243,1.479,1.852c1.066,1.288,2.048,2.786,2.283,3.485c0.062,0.231,0.086,0.42,0.082,0.595	c-0.017,0.6-0.412,1.238-1.471,1.238H31.411z"
                                        opacity=".07"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M34.937,19.041c0.046-0.151,0.068-0.291,0.062-0.416C34.984,18.263,34.735,18,34.149,18h-2.618	c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C25.447,25,25,24.786,25,24.199	v-5.185C25,18.32,24.827,18,24.268,18h-4.649C19.212,18,19,18.32,19,18.641c0,0.667,0.898,0.827,1,2.696v3.623	c0,0.88-0.153,1.04-0.483,1.04c-0.89,0-2.642-3-3.815-6.932C15.448,18.294,15.194,18,14.533,18H11.89C11.127,18,11,18.374,11,18.774	c0,0.721,0.6,4.619,3.875,9.101C17.25,31.125,20.379,33,23.149,33c1.678,0,1.85-0.427,1.85-1.094v-2.972	C25,28.133,25.183,28,25.717,28c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618c0.608,0,0.957-0.255,0.971-0.75	c0.003-0.126-0.015-0.267-0.056-0.424C34.75,31.25,33.86,29.842,32.75,28.5c-0.615-0.743-1.222-1.479-1.501-1.879	C31.062,26.36,30.991,26.176,31,26c0.009-0.185,0.105-0.361,0.249-0.607C31.223,25.393,34.607,20.642,34.937,19.041z"
                                    />
                                </svg>
                                VK
                            </button>
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