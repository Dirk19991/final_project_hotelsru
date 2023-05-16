import React, { FC } from 'react'
import styles from './AllDevices.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import { useI18nContext } from '@/context/i18n'

export interface IAllDevices {
    name: string
}

const AllDevices: FC<IAllDevices> = ({ name }) => {
    const { language, i18n } = useI18nContext()

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h2 className={styles.info__title}>
                    {`${i18n[language].watchAllDevices.title.start} «${name}» ${i18n[language].watchAllDevices.title.end}`}
                </h2>
                <h3 className={styles.info__subtitle}>
                    {i18n[language].watchAllDevices.subtitle}
                </h3>
                <div className={styles.info__button}>
                    <Button
                        href={'https://www.ivi.ru/devices'}
                        type="allDevices"
                        label={i18n[language].watchAllDevices.buttonLabel}
                    />
                </div>
            </div>
            <div className={styles.image}>
                <img
                    className={styles.image__tv}
                    src="https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png"
                    alt="Устройства для просмотра Иви"
                />
                <img
                    className={styles.image__tablet}
                    src="https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png"
                    alt="Устройства для просмотра Иви"
                />
                <img
                    className={styles.image__tvPoster}
                    src="https://thumbs.dfs.ivi.ru/storage4/contents/d/c/cc65d2c26e7b791d4d1ce29f75881b.jpg/400x226/"
                    alt="Постер"
                />
                <img
                    className={styles.image__tabletPoster}
                    src="https://thumbs.dfs.ivi.ru/storage4/contents/d/c/cc65d2c26e7b791d4d1ce29f75881b.jpg/400x226/"
                    alt="Постер"
                />
            </div>
        </div>
    )
}

export default AllDevices
