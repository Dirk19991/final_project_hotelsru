import React from 'react'
import styles from './FooterNavigation.module.scss'
import Link from 'next/link'
import { Button } from '@/stories/Button/ButtonStandard'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import { useTranslation } from 'next-i18next'

const FooterNavigation = () => {
    const { t } = useTranslation(['footer'])

    return (
        <div className={styles.wrapper} data-testid="footer-navigation">
            <div className={styles.list} data-testid="about-section">
                <h4>{t('aboutUs')}</h4>
                <ul>
                    <li>
                        <Link href="https://corp.ivi.ru/">
                            {t('aboutCompany')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://corp.ivi.ru/career/#career-vacancy-block">
                            {t('vacancies')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/pages/beta">
                            {t('betaTestingProgram')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/info/partners">
                            {t('informationForPartners')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://corp.ivi.ru/advertisers/">
                            {t('advertising')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/info/agreement">
                            {t('userAgreement')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/info/confidential">
                            {t('privacyPolicy')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/info/goryachaya-liniya-komplaens">
                            {t('compliance')}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.list} data-testid="nav-section">
                <h4>{t('sections')}</h4>
                <ul className={styles.list}>
                    <li>
                        <Link href="https://www.ivi.ru/">{t('myIvi')}</Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/new">
                            {t('whatsNew')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/movies">
                            {t('movies')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/series">
                            {t('tvSeries')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/animation">
                            {t('cartoons')}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/tvplus">TV+</Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/goodmovies">
                            {t('whatToWatch')}
                        </Link>
                    </li>
                    <li className={styles.certificate}>
                        <Link href="https://www.ivi.ru/cert">
                            {t('activateCertificate')}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.support} data-testid="support-section">
                <h4>{t('support')}</h4>
                <div className={styles.help}>
                    <div>{t('readyToHelp')}</div>
                    <div>{t('ourOperators')}</div>
                </div>

                <Button
                    href="https://www.ivi.ru/profile"
                    label={t('openChat')}
                    onClick={() => {}}
                    type="chat"
                />
                <div className={styles.contactLinks}>
                    <ButtonRound
                        height={20}
                        href="mailto:support@ivi.ru"
                        onClick={() => {}}
                        src="/icons/mail.svg"
                        type="square"
                        width={20}
                    />
                    <ButtonRound
                        height={20}
                        href="tel:88002344923"
                        onClick={() => {}}
                        src="/icons/phone.svg"
                        type="square"
                        width={20}
                    />
                </div>
                <div className={styles.faq}>
                    <Link href="https://www.ask.ivi.ru">ask.ivi.ru</Link>
                    <span>{t('FAQ')}</span>
                </div>
            </div>
            <div className={styles.noAds} data-testid="icon-section">
                <ButtonRound
                    height={56}
                    href="https://www.ivi.ru/subscribe?redirect_url=%2F"
                    onClick={() => {}}
                    src="/icons/speaker.svg"
                    type="bigViolet"
                    width={56}
                />
                <div>{t('watchFilms')}</div>
            </div>
        </div>
    )
}

export default FooterNavigation
