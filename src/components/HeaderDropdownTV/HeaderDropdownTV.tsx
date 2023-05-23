import { useTranslation } from 'next-i18next'
import styles from './HeaderDropdownTV.module.scss'
import SubsciriptionWidget from '../SubscriptionWidget/SubsciriptionWidget'
import { Button } from '@/stories/Button/ButtonStandard'
import Link from 'next/link'
import ChannelsList from './ChannelsList/ChannelsList'
import BroadcastCard, { Broadcast } from './BroadcastCard/BroadcastCard'
import TVCard from './TVCard/TVCard'

const HeaderDropdownTV = () => {
    const { t } = useTranslation('header')

    const categories = [
        { name: 'channels', link: '' },
        {
            name: 'entertaining',
            link: 'razvlekatelnoe',
        },
        { name: 'children', link: 'deti' },
        { name: 'sport', link: 'sport' },
        {
            name: 'documentary',
            link: 'documentalnoe',
        },
    ]

    const federalChannels = [
        '1tv',
        'russia1',
        'match-tv',
        'ntv',
        '5tv',
        'russia-k',
        'russia24',
        'karusel',
        'otr',
        'tvc',
        'ren-tv',
        'spas',
        'sts',
        'tv3',
        'friday',
        'zvezda',
        'mir',
        'tnt',
        'muz-tv',
    ]

    const sportChannels = [
        'match-premier',
        'futbol-1',
        'futbol-2',
        'futbol-3',
        'match-boec',
        'khl-tv-hd',
        'start',
        'khl-tv',
        'match-igra',
        'match-arena',
        'match-strana',
    ]

    const broadcasts: Broadcast[] = [
        {
            name: t('gametype.football'),
            title: `${t('player.pariNN')} — ${t('player.sochi')}`,
            time: `${t('time.today')}  18:55`,
            image: 'ps',
        },
        {
            name: t('gametype.general'),
            title: `${t('player.finland')} — ${t('player.denmark')}`,
            time: `${t('time.tomorrow')}  20:15`,
            image: 'fd',
        },
        {
            name: t('gametype.general'),
            title: `${t('player.canada')} — ${t('player.norway')}`,
            time: `${t('time.inProgress')}`,
            image: 'cn',
        },
        {
            name: t('gametype.general'),
            title: `${t('player.germany')} — ${t('player.france')}`,
            time: `${t('time.tomorrow')}  12:15`,
            image: 'gf',
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.categories}>
                <ul className={styles.categories__list}>
                    <li className={styles.categories__item}>
                        {t('category.online')}
                    </li>
                    {categories.map((c) => (
                        <li key={c.link} className={styles.categories__item}>
                            <Link href={`https://www.ivi.ru/tvplus/${c.link}`}>
                                {t(`category.${c.name}`)}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button
                    type={'tvprogram'}
                    label={t('TVprogram')}
                    href="https://www.ivi.ru/tvplus"
                />
            </div>
            <div className={styles.channels}>
                <div className={styles.channels__content}>
                    <ChannelsList
                        channels={federalChannels.map((channel) => (
                            <TVCard
                                channel={channel}
                                src={`/tv/federal/${channel}.jpg`}
                            />
                        ))}
                        title={t('federalChannels')}
                        slidesPerView={6.5}
                        slidesPerGroup={5}
                        width={88}
                    />
                    <ChannelsList
                        channels={sportChannels.map((channel) => (
                            <TVCard
                                channel={channel}
                                src={`/tv/sport/${channel}.jpg`}
                            />
                        ))}
                        title={t('sportChannels')}
                        slidesPerView={6.5}
                        slidesPerGroup={5}
                        width={88}
                    />
                    <ChannelsList
                        channels={broadcasts.map((b) => (
                            <BroadcastCard broadcast={b} />
                        ))}
                        title={t('popular')}
                        slidesPerView={2.5}
                        slidesPerGroup={1.5}
                        width={270}
                    />
                </div>
            </div>
            <SubsciriptionWidget />
        </div>
    )
}

export default HeaderDropdownTV
