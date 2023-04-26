import { ReactNode, SyntheticEvent } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
    toggle: (isOpen: boolean) => void
    children: ReactNode
}

const Modal = ({ toggle, children }: ModalProps) => {
    return (
        <div className={styles.modal}>
            <span
                className={styles.back}
                onClick={() => {
                    toggle(false)
                }}
            >
                назад
            </span>
            <div
                className={styles.content}
                onClick={(e: SyntheticEvent) => e.stopPropagation()}
            >
                {children}{' '}
            </div>
        </div>
    )
}

export default Modal
