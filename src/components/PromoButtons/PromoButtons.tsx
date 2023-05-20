import { Button } from '@/stories/Button/ButtonStandard'
import styles from './PromoButtons.module.scss'
import { useTranslation } from 'next-i18next'

const PromoButtons = () => {
    const { t } = useTranslation(['promo'])

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <Button
                    height={32}
                    href="/"
                    label={t('thirtyDays1Rouble')}
                    onClick={() => {}}
                    src="/icons/lightning.svg"
                    type="thirtyDays"
                    width={24}
                />
                <Button
                    height={32}
                    href="/"
                    label={t('activateCertificate')}
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
