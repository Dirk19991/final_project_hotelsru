import styles from './AdminPanel.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import Link from 'next/link'

export const PORT = process.env.DEPLOY_API_URL

const AdminPanel = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <Link href="admin/add">
                    <Button backgroundColor="green" label="Добавить фильм" type="watchSubscription" />
                </Link>
                <Link href="admin/delete">
                    <Button label="Удалить фильм" type="watchSubscription" />
                </Link>
                <Link href="admin/edit">
                    <Button backgroundColor="orange" label="Редактировать фильм" type="watchSubscription" />
                </Link>

                <Link href="admin/genre">
                    <Button backgroundColor="orange" label="Редактировать жанр" type="watchSubscription" />
                </Link>
            </div>
        </div>
    )
}
export default AdminPanel
