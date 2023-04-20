import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import styles from './FilmTrailer.module.scss'

const FilmTrailer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.trailer}>FilmTrailer</div>
            <div className={styles.icons}>
                <ButtonFooter
                    height={20}
                    href="/"
                    label="Трейлер"
                    onClick={() => {}}
                    src="/icons/play.svg"
                    type="grey"
                    width={20}
                />

                <ButtonRound
                    height={20}
                    href="/"
                    onClick={() => {}}
                    src="/icons/bookmark.svg"
                    type="grey"
                    width={20}
                />
                <ButtonRound
                    height={20}
                    href="/"
                    onClick={() => {}}
                    src="/icons/bell.svg"
                    type="grey"
                    width={20}
                />

                <ButtonRound
                    height={20}
                    href="/"
                    onClick={() => {}}
                    src="/icons/download.svg"
                    type="grey"
                    width={20}
                />
            </div>
        </div>
    )
}
export default FilmTrailer
