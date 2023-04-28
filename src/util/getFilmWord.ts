import { useI18nContext } from '@/context/i18n'

export default function getFilmWord(number: number) {
    const { language, i18n } = useI18nContext()

    let lastTwoDigits = 0
    if (number >= 10) {
        lastTwoDigits = +number.toString().slice(-2)
    }

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return language === 'en' ? 'movies' : 'фильмов'
    }

    const stringifiedNum = number.toString()
    const lastDigit = +stringifiedNum[stringifiedNum.length - 1]

    let filmWord = ''
    switch (lastDigit) {
        case 1:
            filmWord = language === 'en' ? 'movie' : 'фильм'
            break
        case 2:
        case 3:
        case 4:
            filmWord = language === 'en' ? 'movies' : 'фильма'
            break
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            filmWord = language === 'en' ? 'movies' : 'фильмов'
            break
        default:
            break
    }

    return filmWord
}
