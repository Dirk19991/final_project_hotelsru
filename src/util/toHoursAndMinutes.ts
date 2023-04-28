import { useI18nContext } from '@/context/i18n'

export default function toHoursAndMinutes(totalMinutes: number) {
    const { language, i18n } = useI18nContext()
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    return language === 'en'
        ? `${hours} h.${minutes > 0 ? ` ${minutes} m.` : ''}`
        : `${hours} ч.${minutes > 0 ? ` ${minutes} м.` : ''}`
}
