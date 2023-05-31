import styles from './Comments.module.scss'
import { IAdminPanelMovie, IMovie } from '@/types/ComponentProps/IMovie'
import Comment from './Comment/Comment'
import CommentForm from './CommentForm/CommentForm'
import DefaultCarouselSlide from '@/stories/DefaultCarouselSlide/DefaultCarouselSlide'
import { CommentType } from '../CommentsCarousel/CommentsCarousel'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'

interface IComments {
    comments: CommentType[]
    film: IAdminPanelMovie
    setCommentsRefresh: (value: boolean) => void
}

const Comments = ({ comments, film, setCommentsRefresh }: IComments) => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const { i18n } = useTranslation()
    const mainGenre = i18n.language === 'en' ? film.genres[0].nameEn : film.genres[0].nameRu
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.comments}>
                    <h2>
                        {film.nameRu} (&nbsp;{mainGenre}&nbsp;
                        {film.year}&nbsp;)
                    </h2>
                    <CommentForm movieId={film.id} setCommentsRefresh={setCommentsRefresh} />
                    <div className={styles.commentsList}>
                        {comments?.map((comment) => (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                author={comment.author}
                                text={comment.text}
                                date={comment.date!}
                                comments={comment.comments}
                                setCommentsRefresh={setCommentsRefresh}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.banner}>
                    {film && (
                        <DefaultCarouselSlide
                            rating={film.rating}
                            year={film.year}
                            href={`/`}
                            image={film.poster}
                            country={[{ id: 1, name: 'США' }]}
                            genre={film.genres}
                            name={film.nameRu}
                            duration={film.duration}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Comments
