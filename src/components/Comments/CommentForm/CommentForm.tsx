import styles from './CommentForm.module.scss'
import { ChangeEvent, useState } from 'react'
import { Button } from '@/stories/Button/ButtonStandard'

const CommentForm = () => {
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setComment(value)
        if (value.length < 10 && value.length !== 0) {
            setError(`Минимум 10 сиволов, введите еще ${10 - value.length}`)
        } else {
            setError('')
        }
    }

    return (
        <form className={styles.form}>
            <label className={styles.label}>
                <input
                    className={styles.inputComment}
                    placeholder=" "
                    id="comment"
                    type="text"
                    value={comment}
                    onChange={handleChange}
                />
                <label className={styles.float} htmlFor="comment">
                    Введите комментарий
                </label>
            </label>
            <Button
                onClick={() => {}}
                type="watchSubscription"
                label="Отправить"
            />
            <span className={styles.error}>{error}</span>
        </form>
    )
}
export default CommentForm
