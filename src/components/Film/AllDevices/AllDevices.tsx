import React, { FC } from 'react'
import styles from './AllDevices.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export interface IAllDevices {
    name: string
    src: string
}

const AllDevices: FC<IAllDevices> = ({ name, src }) => {
    const { t } = useTranslation(['film'])

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h2 className={styles.info__title}>
                    {`${t('titleStart')} «${name}» ${t('titleEnd')}`}
                </h2>
                <h3 className={styles.info__subtitle}>{t('subtitle')}</h3>
                <div className={styles.info__button}>
                    <Button
                        href={'https://www.ivi.ru/devices'}
                        type="allDevices"
                        label={t('buttonLabel')}
                    />
                </div>
            </div>
            <div className={styles.image}>
                <Image
                    loader={() =>
                        'https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'
                    }
                    src={src}
                    alt="Устройства для просмотра Иви"
                    width={536}
                    height={272}
                    className={styles.image__tv}
                />
                <Image
                    loader={() =>
                        'https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png'
                    }
                    src={src}
                    alt="Устройства для просмотра Иви"
                    width={200}
                    height={136}
                    className={styles.image__tablet}
                />
                <Image
                    src={src}
                    alt="Постер"
                    width={337}
                    height={192}
                    className={styles.image__tvPoster}
                />
                <Image
                    src={src}
                    alt="Постер"
                    width={188}
                    height={102}
                    className={styles.image__tabletPoster}
                />
            </div>
        </div>
    )
}

export default AllDevices
