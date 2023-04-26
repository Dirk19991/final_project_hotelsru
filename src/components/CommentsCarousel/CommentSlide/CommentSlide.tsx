import styles from './CommentSlide.module.scss'

const CommentSlide = ({}) => {
    return (
        <div className={styles.wrapper}>
            <h5>Имя</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero natus perferendis dicta saepe blanditiis</p>
            <div>
                <span>дата</span>
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
