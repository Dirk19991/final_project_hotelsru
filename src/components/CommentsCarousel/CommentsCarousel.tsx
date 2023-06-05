import styles from './CommentsCarousel.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { CSSProperties, useEffect, useRef, useState } from 'react'
import Modal from '../Modal/Modal'
import { Button } from '@/stories/Button/ButtonStandard'
import Comments from '../Comments/Comments'
import CommentSlide from '@/stories/CommentSlide/CommentSlide'
import { IAdminPanelMovie } from '@/types/Component/IMovie'
import { useTranslation } from 'next-i18next'

const url = process.env.DEPLOY_API_URL

export type CommentType = {
    id?: number
    author: {
        userTd: string
        name: string
    }
    date: null | string
    essenceId?: string
    likes?: string
    movieId?: string
    text: string
    comments?: CommentType[]
    setCommentsRefresh: (value: boolean) => void
    toggleIsAnswerOpen?: (value: boolean) => void
}

interface ICommentsCarousel {
    film: IAdminPanelMovie
    refreshComments: boolean
    setCommentsRefresh: (value: boolean) => void
}

const CommentsCarousel = ({ film, refreshComments, setCommentsRefresh }: ICommentsCarousel) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { t } = useTranslation('film')
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const [comments, setComments] = useState<Array<CommentType>>([])

    useEffect(() => {
        fetch(`${url}/comments?movieId=${film.id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Error')
            })
            .then((res) => {
                if (res.length) {
                    setComments(res)
                }
            })

        setCommentsRefresh(false)
    }, [film.id, refreshComments, setCommentsRefresh])

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <h3 className={styles.title} onClick={() => setIsModalOpen(true)}>
                        {t('comments')}
                    </h3>
                    <Button onClick={() => setIsModalOpen(true)} type="certificate" label={t('leaveAComment')} />
                </div>
                <div className={styles.bottom}>
                    <Swiper
                        init={true}
                        breakpoints={{
                            1250: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                            800: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                            570: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            250: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                        }}
                        style={
                            {
                                '--swiper-navigation-color': '#ffffff80',
                                '--swiper-pagination-color': '#ffffff80',
                                marginTop: '20px',
                            } as CSSProperties
                        }
                        modules={[Navigation]}
                        spaceBetween={25}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                    >
                        {comments.map((comment) => (
                            <SwiperSlide key={comment.id}>
                                <CommentSlide author={comment.author.name} date={comment.date!} text={comment.text} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {!!comments.length && (
                        <>
                            <div className={styles.prevButton} ref={prevRef}>
                                <Image fill src="/icons/arrowLeft.svg" alt="arrowLeft" />
                            </div>
                            <div className={styles.nextButton} ref={nextRef}>
                                <Image fill src="/icons/arrowRight.svg" alt="arrowRight" />
                            </div>
                        </>
                    )}
                </div>
                {isModalOpen && (
                    <Modal toggle={setIsModalOpen}>
                        <Comments comments={comments} film={film} setCommentsRefresh={setCommentsRefresh} />
                    </Modal>
                )}
            </div>
        </>
    )
}
export default CommentsCarousel
