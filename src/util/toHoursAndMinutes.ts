import { i18n } from 'i18next'

export default function toHoursAndMinutes(duration: string, instance: i18n) {
    const totalMinutes = Number(duration)
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    return instance.language === 'en'
        ? `${hours} h.${minutes > 0 ? ` ${minutes} m.` : ''}`
        : `${hours} ч.${minutes > 0 ? ` ${minutes} мин.` : ''}`
}
