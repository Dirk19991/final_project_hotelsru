import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AdminPanel.module.scss'
import data from '@/data/mockData'
import { ISmallSliderMovie } from '@/types/ComponentProps/IMovie'
import AdminPanelFilm from '../AdminPanelFilm/AdminPanelFilm'
import { Button } from '@/stories/Button/ButtonStandard'

const AdminPanel = () => {
    const [screenType, setScreenType] = useState<'buttons' | 'film' | 'genre'>(
        'buttons'
    )

    return (
        <div className="container">
            {screenType === 'buttons' && (
                <div className={styles.wrapper}>
                    <Button
                        href="/admin"
                        label="Редактировать фильм"
                        onClick={() => setScreenType('film')}
                        type="watchSubscription"
                    />

                    <Button
                        href="/admin"
                        label="Редактировать жанр"
                        onClick={() => {}}
                        type="watchSubscription"
                    />
                </div>
            )}
            {screenType === 'film' && <AdminPanelFilm />}
        </div>
    )
}
export default AdminPanel
