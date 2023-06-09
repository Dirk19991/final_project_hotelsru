import React from 'react'
import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import styles from './FooterContacts.module.scss'
import { useTranslation } from 'next-i18next'

const FooterContacts = () => {
    const { t } = useTranslation(['footer'])

    return (
        <div className={styles.contacts} data-testid="footer-contacts">
            <div className={styles.wrapper}>
                <div className={styles.buttonGroup} data-testid="footer-apps">
                    <ButtonFooter
                        height={20}
                        href="https://go.onelink.me/app/devicesiOS"
                        label="App Store"
                        src="/icons/apple.svg"
                        sublabel={t('downloadIn')}
                        width={20}
                        type="black"
                    />
                    <ButtonFooter
                        height={20}
                        href="https://go.onelink.me/app/devicesAndroid"
                        label="Google Play"
                        src="/icons/googlePlay.svg"
                        sublabel={t('availableIn')}
                        width={20}
                        type="black"
                    />

                    <ButtonFooter
                        height={20}
                        href="https://www.ivi.ru/pages/tvsmart"
                        label="Smart TV"
                        src="/icons/smartTV.svg"
                        sublabel={t('watchOn')}
                        width={20}
                        type="black"
                    />

                    <ButtonFooter
                        height={20}
                        href="https://www.ivi.ru/devices"
                        label={t('allDevices')}
                        src="/icons/allDevices.svg"
                        width={20}
                        type="black"
                    />
                </div>
                <div
                    className={styles.buttonGroup}
                    data-testid="footer-socials"
                >
                    <ButtonRound
                        height={16}
                        href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
                        src="/icons/social_vkontakte.svg"
                        width={16}
                        type="round"
                    />

                    <ButtonRound
                        height={16}
                        href="https://ok.ru/ivi.ru"
                        src="/icons/social_odnoklassniki.svg"
                        width={16}
                        type="round"
                    />

                    <ButtonRound
                        height={16}
                        href="https://twitter.com/ivi_ru"
                        src="/icons/social_twitter.svg"
                        width={16}
                        type="round"
                    />
                    <ButtonRound
                        height={16}
                        href="https://vb.me/a0544c"
                        src="/icons/social_viber.svg"
                        width={16}
                        type="round"
                    />

                    <ButtonRound
                        height={16}
                        href="https://www.linkedin.com/company/2543415/"
                        src="/icons/social_linkedin.svg"
                        width={16}
                        type="round"
                    />

                    <ButtonRound
                        height={16}
                        href="https://t.me/official_iviru"
                        src="/icons/social_telegram.svg"
                        width={16}
                        type="round"
                    />
                </div>
            </div>
            <div className={styles.info} data-testid="footer-copyright">
                <p>© 2023 {t('LLC')}</p>
                <p>
                    HBO ® and related service marks are the property of Home Box
                    Office, Inc
                </p>
            </div>
        </div>
    )
}

export default FooterContacts
