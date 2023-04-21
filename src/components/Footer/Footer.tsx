import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import React from 'react'
import BottomMenu from '../BottomMenu/BottomMenu'
import styles from './Footer.module.scss'
import { useI18nContext } from '@/context/i18n'

const Footer = () => {
    const { i18n, language } = useI18nContext()

    return (
        <footer>
            <BottomMenu />
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.buttonGroup}>
                            <ButtonFooter
                                height={20}
                                href="https://go.onelink.me/app/devicesiOS"
                                label="App Store"
                                src="/icons/apple.svg"
                                sublabel={i18n[language].downloadIn}
                                width={20}
                                type="black"
                            />
                            <ButtonFooter
                                height={20}
                                href="https://go.onelink.me/app/devicesAndroid"
                                label="Google Play"
                                src="/icons/googlePlay.svg"
                                sublabel={i18n[language].availableIn}
                                width={20}
                                type="black"
                            />

                            <ButtonFooter
                                height={20}
                                href="https://www.ivi.ru/pages/tvsmart"
                                label="Smart TV"
                                src="/icons/smartTV.svg"
                                sublabel={i18n[language].watchOn}
                                width={20}
                                type="black"
                            />

                            <ButtonFooter
                                height={20}
                                href="https://www.ivi.ru/devices"
                                label={i18n[language].allDevices}
                                src="/icons/allDevices.svg"
                                width={20}
                                type="black"
                            />
                        </div>
                        <div className={styles.buttonGroup}>
                            <ButtonRound
                                height={20}
                                href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
                                src="/icons/social_vkontakte.svg"
                                width={20}
                                type="round"
                            />

                            <ButtonRound
                                height={20}
                                href="https://ok.ru/ivi.ru"
                                src="/icons/social_odnoklassniki.svg"
                                width={20}
                                type="round"
                            />

                            <ButtonRound
                                height={20}
                                href="https://twitter.com/ivi_ru"
                                src="/icons/social_twitter.svg"
                                width={20}
                                type="round"
                            />
                            <ButtonRound
                                height={20}
                                href="https://vb.me/a0544c"
                                src="/icons/social_viber.svg"
                                width={20}
                                type="round"
                            />

                            <ButtonRound
                                height={20}
                                href="https://www.linkedin.com/company/2543415/"
                                src="/icons/social_linkedin.svg"
                                width={20}
                                type="round"
                            />

                            <ButtonRound
                                height={20}
                                href="https://t.me/official_iviru"
                                src="/icons/social_telegram.svg"
                                width={20}
                                type="round"
                            />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <p>© 2023 {i18n[language].LLC}</p>
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
