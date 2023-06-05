import { ReactNode, SyntheticEvent } from 'react'
import styles from './Modal.module.scss'
import { useTranslation } from 'react-i18next'

interface ModalProps {
    toggle: (isOpen: boolean) => void
    children: ReactNode
}

const Modal = ({ toggle, children }: ModalProps) => {
    const {t} = useTranslation("common")

    return (
        <div className={styles.modal}>
            <span
                className={styles.back}
                onClick={() => {
                    toggle(false)
                }}
            >
                {t("back")}
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
