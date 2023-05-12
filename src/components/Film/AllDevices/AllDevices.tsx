import React, { FC } from 'react'
import styles from './AllDevices.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'

export interface IAllDevices {
    name: string
}

const AllDevices: FC<IAllDevices> = ({ name }) => {
    return (
        <section className={styles.allDevices}>
            <div className={styles.allDevices_link}>
                <p className={styles.allDevices_link_title}>
                    {`Cмотреть «${name}» на всех устройствах`}
                </p>
                <p className={styles.allDevices_link_subTitle}>
                    Приложение доступно для скачивания на iOS, Android, SmartTV
                    и приставках
                </p>
                <Button
                    href={'https://www.ivi.ru/devices'}
                    type="connectDevices"
                    label="Подключить устройства"
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
