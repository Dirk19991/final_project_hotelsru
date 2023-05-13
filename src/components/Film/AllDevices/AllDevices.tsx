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
        <section className={styles.allDevices}>
            <div className={styles.allDevices_link}>
                <p className={styles.allDevices_link_title}>
                    {`${i18n[language].watchAllDevices.title.start} «${name}» ${i18n[language].watchAllDevices.title.end}`}
                </p>
                <p className={styles.allDevices_link_subTitle}>
                    {i18n[language].watchAllDevices.subtitle}
                </p>
                <Button
                    href={'https://www.ivi.ru/devices'}
                    type="connectDevices"
                    label={i18n[language].watchAllDevices.buttonLabel}
                    width={215}
                />
            </div>
            <div className={styles.allDevices_image}>
                <img
                    className={styles.allDevices_image_tv}
                    src="https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png"
                    alt="Устройства для просмотра Иви"
                />
                <img
                    className={styles.allDevices_image_tablet}
                    src="https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png"
                    alt="Устройства для просмотра Иви"
                />
                <img
                    className={styles.allDevices_image_tvPoster}
                    src="https://thumbs.dfs.ivi.ru/storage4/contents/d/c/cc65d2c26e7b791d4d1ce29f75881b.jpg/400x226/"
                    alt="Постер"
                />
                <img
                    className={styles.allDevices_image_tabletPoster}
                    src="https://thumbs.dfs.ivi.ru/storage4/contents/d/c/cc65d2c26e7b791d4d1ce29f75881b.jpg/400x226/"
                    alt="Постер"
                />
            </div>
        </section>
    )
}

export default AllDevices
