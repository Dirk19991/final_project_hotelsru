import styles from './CommentForm.module.scss'
import { ChangeEvent, useState } from 'react'
import { Button } from '@/stories/Button/ButtonStandard'

const url = process.env.DEPLOY_API_URL

interface ICommentForm {
    commentId?: number
    movieId?: number
    toggleIsAnswerOpen?: (value: boolean) => void
    setCommentsRefresh: (value: boolean) => void 
}

const CommentForm = ({ commentId, movieId, toggleIsAnswerOpen, setCommentsRefresh }: ICommentForm) => {
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')
    const [hand] = useState(movieId ? `movieId=${movieId}` : `commentId=${commentId}`)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setComment(value)
        if (value.length < 10 && value.length !== 0) {
            setError(`Минимум 10 сиволов, введите еще ${10 - value.length}`)
        } else {
            setError('')
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | void) => {
        if (e) e.preventDefault()

        const newComment = {
            author: {
                userId: 1, //поменять на  userId
            },
            text: comment,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment),
        }

        fetch(`${url}/comments?${hand}`, requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error))

        setCommentsRefresh(true)
        setComment('')
        if (toggleIsAnswerOpen) {
            toggleIsAnswerOpen(false)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
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
            <Button onClick={handleSubmit} type="watchSubscription" label="Отправить" />
            <span className={styles.error}>{error}</span>
        </form>
    )
}
export default CommentForm
