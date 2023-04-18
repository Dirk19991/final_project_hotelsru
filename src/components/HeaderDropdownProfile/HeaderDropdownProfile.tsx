import React from 'react'
import styles from './HeaderDropdownProfile.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeaderDropdownProfile = () => {
    const { push } = useRouter()

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <ul className={styles.list}>
                    <li>
                        <Link href="https://www.ivi.ru/profile/purchases">
                            <div>
                                <div className={styles.icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.text}>Покупки</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/profile/purchases">
                            <div>
                                <div className={styles.icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.text}>
                                    Смотреть позже
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/profile/purchases">
                            <div>
                                <div className={styles.icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        width={20}
                                        height={20}
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.text}>
                                    История просмотров
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/profile/purchases">
                            <div>
                                <div className={styles.icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        width={20}
                                        height={20}
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.text}>
                                    Подписки <span>Подключить</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/profile/purchases">
                            <div>
                                <div className={styles.icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        width={20}
                                        height={20}
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.text}>
                                    Активация сертификата
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/profile/purchases">
                            <div>
                                <div className={styles.icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        width={20}
                                        height={20}
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.text}>Вход по коду</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/profile/purchases">
                            <div>
                                <div className={styles.icon}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.5"
                                        width={20}
                                        height={20}
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.text}>
                                    Способы оплаты
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.sideContent}>
                {/* TODO: Storybook */}
                <button onClick={() => push('/auth')}>
                    Войти или зарегистрироваться
                </button>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <Link href="https://www.ivi.ru/profile/settings">
                                Настройки
                            </Link>
                        </li>
                        <li>
                            <Link href="https://ask.ivi.ru/">Помощь</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderDropdownProfile
