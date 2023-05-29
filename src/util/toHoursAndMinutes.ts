import { i18n } from 'i18next'

export default function toHoursAndMinutes(totalMinutes: number, instance: i18n) {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    return instance.language === 'en'
        ? `${hours} h.${minutes > 0 ? ` ${minutes} m.` : ''}`
        : `${hours} ч.${minutes > 0 ? ` ${minutes} мин.` : ''}`
}
