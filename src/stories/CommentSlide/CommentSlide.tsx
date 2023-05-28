import { FormatDate } from '@/util/formatDate'
import styles from './CommentSlide.module.scss'

export interface IComment {
    id?: number
    author: string
    text: string
    date: string
    comments?: IComment[]
}

const CommentSlide = ({ author, text, date }: IComment) => {
    return (
        <div className={styles.wrapper}>
            <h5>{author}</h5> 
            <p>{text}</p>
            <div>
                <span>{FormatDate(date)}</span>
                <div className={styles.likes}>
                    <span className={styles.likeUp}></span>
                    <span className={styles.value}>36</span>
                    <span className={styles.likeDown}></span>
                </div>
            </div>
        </div>
    )
}
export default CommentSlide
