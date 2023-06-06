import React, { FC, useContext, useState } from 'react'
import styles from './AuthModal.module.scss'
import Link from 'next/link'
import { Button } from '@/stories/Button/ButtonStandard'
import cn from 'classnames'
import Image from 'next/image'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'next-i18next'
import AuthService from '@/services/AuthService'
import AlternativeHeader from '@/components/layout/header/AlternativeHeader/AlternativeHeader'
import { AuthContext } from '@/types/Component/Context'
import parseJwt from '@/util/parseJwt'

interface IAuthModal {
    close: () => void
}

const AuthModal: FC<IAuthModal> = ({ close }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorMes, setErrorMes] = useState('')

    const auth = useContext(AuthContext)

    const { t } = useTranslation(['header'])

    const onContinueClick = async () => {
        if (!isDataValid()) {
            return
        }

        const response = await AuthService.login(email, password)
        if (response?.status === 401) {
            setErrorMes(t('auth.invalidPassword').toString())
        } else {
            afterLogin()
        }
    }

    const isDataValid = (): boolean => {
        const emailResults = /\S+@\S+\.\S+/.exec(email)
        if (!emailResults || emailResults[0] !== email) {
            setErrorMes(t('auth.invalidEmail').toString())
            return false
        }
        if (password.length < 5) {
            setErrorMes(t('auth.notEnoughSymbols').toString())
            return false
        }
        return true
    }

    const onGoogleClick = () => {
        AuthService.authGoogle()
        afterLogin()
    }

    const onVKClick = () => {
        AuthService.authVK()
        afterLogin()
    }

    const afterLogin = () => {
        auth?.setIsAuth(true)
        const data = parseJwt(localStorage.getItem('token') || '')
        if (data && data.roles.includes('ADMIN')) {
            auth?.setIsAdmin(true)
        }
        close()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <AlternativeHeader title={t('auth.loginTitle')} close={close} />
                <div className={styles.auth}>
                    <div className="container">
                        <div className={styles['auth-wrapper']}>
                            <div className={styles.title}>
                                <p>{t('auth.loginOrReg')}</p>
                                <span>{t('auth.useAllDevices')}</span>
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
                                        data-testid="email-input"
                                    />
                                    <label className={styles.float} htmlFor="email">
                                        {t('auth.typeEmail')}
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
                                        data-testid="password-input"
                                    />
                                    <label className={styles.float} htmlFor="password">
                                        {t('auth.typePassword')}
                                    </label>
                                </label>
                                <Button
                                    onClick={onContinueClick}
                                    type="watchSubscription"
                                    label={t('auth.continue')}
                                    testId="login-button"
                                />
                                <div className={styles.socials}>
                                    <button onClick={onGoogleClick} type="button">
                                        <Image src="/icons/google.svg" alt={'google-icon'} width={20} height={20} />
                                        Google
                                    </button>
                                    <button onClick={onVKClick} type="button">
                                        <Image src="/icons/vk.svg" alt={'vk-icon'} width={20} height={20} />
                                        VK
                                    </button>
                                </div>
                            </form>
                            <div className={styles.agreement}>
                                <p>{t('auth.iAgree')}</p>
                                <span>
                                    {t('auth.with')}{' '}
                                    <Link href="https://www.ivi.ru/info/confidential">
                                        {t('auth.withConfidential')}
                                    </Link>
                                </span>
                                <span>
                                    {t('auth.and')}{' '}
                                    <Link href="https://www.ivi.ru/info/agreement">{t('auth.withAgreement')}</Link>
                                </span>
                            </div>
                            <div
                                className={cn(styles.error, { [styles.error_none]: !errorMes })}
                                data-testid="login-error"
                            >
                                <FontAwesomeIcon icon={faCircleExclamation} fontSize={30} />
                                <div className={styles.error__info}>
                                    <span className={styles.error__title}>{t('auth.error')}</span>
                                    <span className={styles.error__text}>{errorMes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal
