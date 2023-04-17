import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import React from 'react'
import BottomMenu from '../BottomMenu/BottomMenu'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <BottomMenu />
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.buttonGroup}>
                            <ButtonFooter
                                height={20}
                                href="/"
                                label="App Store"
                                src="/icons/apple.svg"
                                sublabel="Загрузить в"
                                width={20}
                            />
                            <ButtonFooter
                                height={20}
                                href="/"
                                label="Google Play"
                                src="/icons/googlePlay.svg"
                                sublabel="Доступно в"
                                width={20}
                            />

                            <ButtonFooter
                                height={20}
                                href="/"
                                label="Smart TV"
                                src="/icons/smartTV.svg"
                                sublabel="Смотрите на"
                                width={20}
                            />

                            <ButtonFooter
                                height={20}
                                href="/"
                                label="Все устройства"
                                src="/icons/allDevices.svg"
                                width={20}
                            />
                        </div>
                        <div className={styles.buttonGroup}>
                            <ButtonRound
                                height={20}
                                href="/"
                                src="/icons/social_vkontakte.svg"
                                width={20}
                                type="round"
                            />

                            <ButtonRound
                                height={20}
                                href="/"
                                src="/icons/social_odnoklassniki.svg"
                                width={20}
                                type="round"
                            />

                            <ButtonRound
                                height={20}
                                href="/"
                                src="/icons/social_twitter.svg"
                                width={20}
                                type="round"
                            />
                            <ButtonRound
                                height={20}
                                href="/"
                                src="/icons/social_viber.svg"
                                width={20}
                                type="round"
                            />

                            <ButtonRound
                                height={20}
                                href="/"
                                src="/icons/social_linkedin.svg"
                                width={20}
                                type="round"
                            />

                            <ButtonRound
                                height={20}
                                href="/"
                                src="/icons/social_telegram.svg"
                                width={20}
                                type="round"
                            />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <p>© 2023 ООО «Иви.ру»</p>
                        <p>
                            HBO ® and related service marks are the property of
                            Home Box Office, Inc
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
