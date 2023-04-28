import { SlideSmall } from '@/stories/SlideSmall/SlideSmall'
import styles from './Comments.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import data from '@/data/mockDataFilm.json'
import { IMovie } from '@/types/ComponentProps/IMovie'
import commentsData from '../../data/mockDataComments.json'
import Comment from './Comment/Comment'
import CommentForm from './CommentForm/CommentForm'

const Comments = () => {
    const router = useRouter()
    const filmID = router.query.filmName

    const [filmData, setFilmData] = useState<IMovie | null>(null)

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${filmID}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setFilmData(res))
            .catch((error) =>
                setFilmData(JSON.parse(JSON.stringify(data)) as IMovie)
            )
    }, [filmID])

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.comments}>
                    <h2>
                        {filmData?.nameRu} (&nbsp;{filmData?.type}&nbsp;
                        {filmData?.year}&nbsp;)
                    </h2>
                    <CommentForm />
                    <div className={styles.commentsList}>
                        {commentsData.map((comment) => (
                            <Comment
                                key={comment.id}
                                author={comment.author}
                                text={comment.text}
                                date={comment.date}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.banner}>
                    {filmData && (
                        <SlideSmall
                            rating={filmData.rating}
                            year={filmData.year}
                            href={`/`}
                            image={filmData.previewPoster}
                            country={[{ id: 1, name: 'США' }]}
                            genre={filmData.genres}
                            name={filmData.nameRu}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Comments
