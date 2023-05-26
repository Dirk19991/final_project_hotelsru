import React, { ChangeEvent, useState } from 'react'
import styles from './AuthorizationForm.module.scss'
import Link from 'next/link'
import { Button } from '@/stories/Button/ButtonStandard'
import cn from 'classnames'
import Image from 'next/image'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'next-i18next'
import AuthService from '@/services/AuthService'
import { useRouter } from 'next/router'

const AuthorizationForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorMes, setErrorMes] = useState('')

    const { push } = useRouter()

    const { t } = useTranslation(['auth'])

    const onContinueClick = async () => {
        if (!isDataValid()) {
            return
        }

        const result = await AuthService.loginOrRegister(email, password)

        if (result?.status === 401) {
            setErrorMes(t('invalidPassword').toString())
        }
        if (AuthService.isAuth) {
            push('/')
        }
    }

    const isDataValid = (): boolean => {
        const emailResults = /\S+@\S+\.\S+/.exec(email)
        if (!emailResults || emailResults[0] !== email) {
            setErrorMes(t('invalidEmail').toString())
            return false
        }
        if (password.length < 6) {
            setErrorMes(t('notEnoughSymbols').toString())
            return false
        }
        return true
    }

    const onGoogleClick = () => {}

    const onVKClick = () => {}

    return (
        <div className={styles.auth}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <p>{t('loginOrReg')}</p>
                        <span>{t('useAllDevices')}</span>
                    </div>
                    <form className={styles.form} onChange={() => setErrorMes('')}>
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
                                {t('typeEmail')}
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
                                {t('typePassword')}
                            </label>
                        </label>
                        <Button onClick={onContinueClick} type="watchSubscription" label={t('continue')} />
                        <div className={styles.socials}>
                            <button onClick={onGoogleClick}>
                                <Image src="/icons/google.svg" alt={'google-icon'} width={20} height={20} />
                                Google
                            </button>
                            <button onClick={onVKClick}>
                                <Image src="/icons/vk.svg" alt={'vk-icon'} width={20} height={20} />
                                VK
                            </button>
                        </div>
                    </form>
                    <div className={styles.agreement}>
                        <p>{t('iAgree')}</p>
                        <span>
                            {t('with')} <Link href="https://www.ivi.ru/info/confidential">{t('withConfidential')}</Link>
                        </span>
                        <span>
                            {t('and')} <Link href="https://www.ivi.ru/info/agreement">{t('withAgreement')}</Link>
                        </span>
                    </div>
                    <div className={cn(styles.error, { [styles.error_none]: !errorMes })}>
                        <FontAwesomeIcon icon={faCircleExclamation} width={30} height={30} />
                        <div className={styles.error__info}>
                            <span className={styles.error__title}>{t('error')}</span>
                            <span className={styles.error__text}>{errorMes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorizationForm
