import { Button } from '@/stories/Button/ButtonStandard'
import styles from './PromoButtons.module.scss'

const PromoButtons = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <Button
                    height={32}
                    href="/"
                    label="30 дней подписки за 1 ₽"
                    onClick={() => {}}
                    src="/icons/lightning.svg"
                    type="thirtyDays"
                    width={24}
                />
                <Button
                    height={32}
                    href="/"
                    label="Активировать сертификат"
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
