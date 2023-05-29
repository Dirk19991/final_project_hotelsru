import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './AdminPanel.module.scss'
import AdminPanelFilm from '../AdminPanelEdit/AdminPanelEdit'
import { Button } from '@/stories/Button/ButtonStandard'
import AdminPanelGenre from '../AdminPanelGenre/AdminPanelGenre'
import Link from 'next/link'

export const PORT = 'http://193.32.203.137:4000/'

const AdminPanel = () => {
    return (
        <div className="container add">
            <div className={styles.wrapper}>
                <Link href="admin/add">
                    <Button label="Добавить фильм" type="watchSubscription" />
                </Link>
                <Link href="admin/edit">
                    <Button label="Редактировать фильм" type="watchSubscription" />
                </Link>
                <Link href="admin/delete">
                    <Button label="Удалить фильм" type="watchSubscription" />
                </Link>
                <Link href="admin/genre">
                    <Button label="Редактировать жанр" type="watchSubscription" />
                </Link>
            </div>
        </div>
    )
}
export default AdminPanel
