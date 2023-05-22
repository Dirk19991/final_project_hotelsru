import { useTranslation } from 'next-i18next'

export default function toHoursAndMinutes(totalMinutes: number) {
    const { i18n } = useTranslation()
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    return i18n.language === 'en'
        ? `${hours} h.${minutes > 0 ? ` ${minutes} m.` : ''}`
        : `${hours} ч.${minutes > 0 ? ` ${minutes} мин.` : ''}`
}
