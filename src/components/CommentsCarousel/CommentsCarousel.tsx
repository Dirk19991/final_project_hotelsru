import styles from './CommentsCarousel.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { CSSProperties, useRef, useState } from 'react'
import CommentSlide from './CommentSlide/CommentSlide'
import Modal from '../Modal/Modal'
import { Button } from '@/stories/Button/ButtonStandard'
import Comments from '../Comments/Comments'
import commentsData from '../../data/mockDataComments.json'

const CommentsCarousel = ({}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    return (
        <>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        <h3
                            className={styles.title}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Комментарии
                        </h3>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            type="certificate"
                            label="Оставить&nbsp;комментарий"
                        />
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
                            {commentsData.map((comment) => (
                                <SwiperSlide key={comment.id}>
                                    <CommentSlide
                                        author={comment.author}
                                        date={comment.date}
                                        text={comment.text}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={styles.prevButton} ref={prevRef}>
                            <Image
                                fill
                                src="/icons/arrowLeft.svg"
                                alt="arrowLeft"
                            />
                        </div>
                        <div className={styles.nextButton} ref={nextRef}>
                            <Image
                                fill
                                src="/icons/arrowRight.svg"
                                alt="arrowRight"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal toggle={setIsModalOpen}>
                    <Comments />
                </Modal>
            )}
        </>
    )
}
export default CommentsCarousel
