import styles from './Comments.module.scss'
import Comment from './Comment/Comment'
import CommentForm from './CommentForm/CommentForm'
import DefaultCarouselSlide from '@/stories/DefaultCarouselSlide/DefaultCarouselSlide'
import { CommentType } from '../CommentsCarousel/CommentsCarousel'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { IAdminPanelMovie } from '@/types/Component/IMovie'

interface IComments {
    comments: CommentType[]
    film: IAdminPanelMovie
    setCommentsRefresh: (value: boolean) => void
}

const Comments = ({ comments, film, setCommentsRefresh }: IComments) => {
    const { i18n } = useTranslation()
    const mainGenre = i18n.language === 'en' ? film.genres[0].nameEn : film.genres[0].nameRu
    const movieName = i18n.language === 'en' ? film.nameEn : film.nameRu

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.comments}>
                    <h2>
                        {movieName} ({mainGenre}&nbsp;
                        {film.year})
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
                            href={`/watch/${film.id}`}
                            image={film.poster}
                            countries={film.countries}
                            genres={film.genres}
                            name={movieName}
                            duration={film.duration}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Comments
