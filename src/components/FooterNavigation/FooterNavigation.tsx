import React from 'react'
import styles from './FooterNavigation.module.scss'
import Link from 'next/link'
import { Button } from '@/stories/Button/ButtonStandard'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import { useI18nContext } from '@/context/i18n'
import { useTranslation } from 'next-i18next'

const FooterNavigation = () => {
    const { i18n, language } = useI18nContext()

    const { t } = useTranslation('footer')

    return (
        <div className={styles.wrapper} data-testid="footer-navigation">
            <div className={styles.list} data-testid="about-section">
                <h4>{t('aboutUs')}</h4>
                <ul>
                    <li>
                        <Link href="https://corp.ivi.ru/">
                            {i18n[language].aboutCompany}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://corp.ivi.ru/career/#career-vacancy-block">
                            {i18n[language].vacancies}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/pages/beta">
                            {i18n[language].betaTestingProgram}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/info/partners">
                            {i18n[language].informationForPartners}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://corp.ivi.ru/advertisers/">
                            {i18n[language].advertising}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/info/agreement">
                            {i18n[language].userAgreement}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/info/confidential">
                            {i18n[language].privacyPolicy}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/info/goryachaya-liniya-komplaens">
                            {i18n[language].compliance}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.list} data-testid="nav-section">
                <h4>{i18n[language].sections}</h4>
                <ul className={styles.list}>
                    <li>
                        <Link href="https://www.ivi.ru/">
                            {i18n[language].myIvi}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/new">
                            {i18n[language].whatsNew}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/movies">
                            {i18n[language].movies}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/series">
                            {i18n[language].tvSeries}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/animation">
                            {i18n[language].cartoons}
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/tvplus">TV+</Link>
                    </li>
                    <li>
                        <Link href="https://www.ivi.ru/goodmovies">
                            {i18n[language].whatToWatch}
                        </Link>
                    </li>
                    <li className={styles.certificate}>
                        <Link href="https://www.ivi.ru/cert">
                            {i18n[language].activateCertificate}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.support} data-testid="support-section">
                <h4>{i18n[language].support}</h4>
                <div className={styles.help}>
                    <div>{i18n[language].readyToHelp}</div>
                    <div>{i18n[language].ourOperators}</div>
                </div>

                <Button
                    href="https://www.ivi.ru/profile"
                    label={i18n[language].openChat}
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
                    <span>{i18n[language].FAQ}</span>
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
                <div>{i18n[language].watchFilms}</div>
            </div>
        </div>
    )
}

export default FooterNavigation
