import styles from './CommentForm.module.scss'
import { ChangeEvent, useState } from 'react'
import { Button } from '@/stories/Button/ButtonStandard'
import { useTranslation } from 'react-i18next'
import parseJwt from '@/util/parseJwt'
import { $auth } from '@/lib/axios'

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
    const { t } = useTranslation('film')

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

        const data = parseJwt(localStorage.getItem('token') || '')

        const newComment = {
            author: {
                userId: data?.userId,
            },
            text: comment,
        }

        $auth.post(`${url}/comments?${hand}`, newComment)

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
                    {t('leaveAComment')}
                </label>
            </label>
            <Button onClick={handleSubmit} type="watchSubscription" label={t('send')} />
            <span className={styles.error}>{error}</span>
        </form>
    )
}
export default CommentForm
