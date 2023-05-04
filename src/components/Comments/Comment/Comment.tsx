import { IComment } from '@/stories/CommentSlide/CommentSlide'
import styles from './Comment.module.scss'
import { useState } from 'react'
import CommentForm from '../CommentForm/CommentForm'

const Comment = ({ author, text, date }: IComment) => {
    const [isAnswerOpen, toggleIsAnswerOpen] = useState(false)

    return (
        <div className={styles.wrapper}>
            <span className={styles.ava}>{author.slice(0, 1)}</span>
            <div className={styles.comment}>
                <span>{author}</span>
                <span>{date}</span>
                <p>{text}</p>
            </div>
            <div className={styles.likes}>
                <span className={styles.likeUp}></span>
                <span className={styles.value}>36</span>
                <span className={styles.likeDown}></span>
            </div>
            <div className={styles.answer}>
                <span onClick={() => toggleIsAnswerOpen((prev) => !prev)}>
                    Ответить
                </span>
                {isAnswerOpen && <CommentForm />}
            </div>
        </div>
    )
}
export default Comment
