import { FC, useEffect, useRef, useState } from 'react'
import styles from './TooltipIcon.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { createPortal } from 'react-dom'

export interface ITooltipIcon {
    icon: IconDefinition
    text: string
}

const TooltipIcon: FC<ITooltipIcon> = ({ icon, text }) => {
    const MARGIN_TOP = 30

    const containerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isVisible) {
            const cont = containerRef.current!.getBoundingClientRect()
            tooltipRef.current!.style.marginTop =
                cont.y + window.scrollY - MARGIN_TOP + 'px'
            tooltipRef.current!.style.marginLeft =
                cont.x + window.scrollX + 'px'
        }
    }, [isVisible])

    return (
        <div className={styles.container} ref={containerRef}>
            <FontAwesomeIcon
                icon={icon}
                className={styles.icon}
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            />
            {isVisible &&
                createPortal(
                    <div className={styles.tooltip} ref={tooltipRef}>
                        {text}
                    </div>,
                    document.body
                )}
            ;
        </div>
    )
}

export default TooltipIcon
