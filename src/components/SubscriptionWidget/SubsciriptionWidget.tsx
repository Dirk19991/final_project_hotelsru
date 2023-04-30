import React from 'react'
import styles from './SubscriptionWidget.module.scss'
import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { useI18nContext } from '@/context/i18n'

const SubsciriptionWidget = () => {
    const { i18n, language } = useI18nContext()

    return (
        <div className={styles.widget}>
            <div>
                короче хз пока как делать этот виджет. Возможно, его
                необязателньо делать точь в точь
            </div>
            <ButtonFooter
                height={20}
                href="/"
                label={i18n[language].watchOnSmartTV}
                src="/icons/smartTV.svg"
                type="long"
                width={20}
            />
        </div>
    )
}

export default SubsciriptionWidget
