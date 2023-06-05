import styles from './Comment.module.scss'
import { useState } from 'react'
import CommentForm from '../CommentForm/CommentForm'
import { CommentType } from '@/components/commentsCarousel/CommentsCarousel'
import { FormatDate } from '@/util/formatDate'

const Comment = ({ author, text, date, comments, id, setCommentsRefresh }: CommentType) => {
    const [isAnswerOpen, toggleIsAnswerOpen] = useState(false)

    return (
        <div className={styles.wrapper}>
            <span className={styles.ava}>{author.name.slice(0, 1)}</span>
            <div className={styles.comment}>
                <span>{author.name}</span>
                <span>{FormatDate(date!)}</span>
                <p>{text}</p>
            </div>
            <div className={styles.likes}>
                <span className={styles.likeUp}></span>
                <span className={styles.value}>36</span>
                <span className={styles.likeDown}></span>
            </div>
            <div className={styles.answer}>
                <span onClick={() => toggleIsAnswerOpen((prev) => !prev)}>Ответить</span>
                {isAnswerOpen && (
                    <CommentForm
                        commentId={id}
                        setCommentsRefresh={setCommentsRefresh}
                        toggleIsAnswerOpen={toggleIsAnswerOpen}
                    />
                )}
            </div>
            <div className={styles.commentsList}>
                {comments?.map((comment) => (
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        author={comment.author}
                        text={comment.text}
                        date={comment.date}
                        comments={comment.comments}
                        setCommentsRefresh={setCommentsRefresh}
                        toggleIsAnswerOpen={toggleIsAnswerOpen}
                    />
                ))}
            </div>
        </div>
    )
}
export default Comment
