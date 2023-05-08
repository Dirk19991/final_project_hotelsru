import { FC } from 'react'
import styles from './ProgressBar.module.scss'

export interface IProgressBar {
    progress: number
    className?: string
}

const ProgressBar: FC<IProgressBar> = ({ className, progress }) => {
    return (
        <div className={className}>
            <div className={styles.container}>
                <div
                    className={styles.progress}
                    style={{ width: progress + '%' }}
                ></div>
            </div>
        </div>
    )
}

export default ProgressBar
