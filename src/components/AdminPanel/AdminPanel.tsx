import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AdminPanel.module.scss'
import AdminPanelFilm from '../AdminPanelFilm/AdminPanelFilm'
import { Button } from '@/stories/Button/ButtonStandard'
import AdminPanelGenre from '../AdminPanelGenre/AdminPanelGenre'
import Link from 'next/link'

export const PORT = 'http://193.32.203.137:4000/'

const AdminPanel = () => {
    const [screenType, setScreenType] = useState<'buttons' | 'film' | 'genre'>('buttons')

    return (
        <div className="container add">
            {screenType === 'buttons' && (
                <div className={styles.wrapper}>
                    <Link href="admin/edit">
                        <Button
                            label="Редактировать фильм"
                            onClick={() => setScreenType('film')}
                            type="watchSubscription"
                        />
                    </Link>
                    <Link href="admin/delete">
                        <Button label="Удалить фильм" onClick={() => setScreenType('genre')} type="watchSubscription" />
                    </Link>
                    <Link href="admin/genre">
                        <Button
                            label="Редактировать жанр"
                            onClick={() => setScreenType('genre')}
                            type="watchSubscription"
                        />
                    </Link>
                </div>
            )}
        </div>
    )
}
export default AdminPanel
