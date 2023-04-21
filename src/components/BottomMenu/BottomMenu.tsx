import React from 'react'
import Image from 'next/image'
import styles from './BottomMenu.module.scss'
import Link from 'next/link'
import { Button } from '@/stories/Button/ButtonStandard'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import { useI18nContext } from '@/context/i18n'

// можно\нужно ли делать списки меню - отдельными компоненты?)

const BottomMenu = () => {
    const { i18n, language } = useI18nContext()

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    <li>{i18n[language].aboutUs}</li>
                    <li>
                        {' '}
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

                <div>
                    <ul className={styles.list}>
                        <li>{i18n[language].sections}</li>
                        <li>
                            {' '}
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
                        <li className={styles.violet}>
                            <Link href="https://www.ivi.ru/cert">
                                {i18n[language].activateCertificate}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div className={styles.support}>
                        {i18n[language].support}
                    </div>
                    <div className={styles.help}>
                        <div>{i18n[language].weAreAlways}</div>
                        <div>{i18n[language].ourOperators}</div>
                    </div>

                    <Button
                        href="https://www.ivi.ru/profile"
                        label={i18n[language].openChat}
                        onClick={() => {}}
                        type="chat"
                    />
                    <div className={styles.flex}>
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
                    <a href="https://www.ask.ivi.ru" className={styles.white}>
                        ask.ivi.ru
                    </a>
                    <div>{i18n[language].FAQ}</div>
                </div>
                <div className={styles.speaker}>
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
        </div>
    )
}

export default BottomMenu
