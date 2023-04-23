import { Button } from '@/stories/Button/ButtonStandard'
import styles from './PromoButtons.module.scss'
import { useI18nContext } from '@/context/i18n'

const PromoButtons = () => {
    const { language, i18n } = useI18nContext()

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <Button
                    height={32}
                    href="/"
                    label={i18n[language].thirtyDays1Rouble}
                    onClick={() => {}}
                    src="/icons/lightning.svg"
                    type="thirtyDays"
                    width={24}
                />
                <Button
                    height={32}
                    href="/"
                    label={i18n[language].activateCertificate}
                    onClick={() => {}}
                    src="/icons/gift.svg"
                    type="certificate"
                    width={56}
                />
            </div>
        </div>
    )
}

export default PromoButtons
