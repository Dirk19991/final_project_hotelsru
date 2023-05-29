import { i18n } from 'i18next'

export default function getFilmWord(number: number | null, instance?: i18n) {
    if (number === null || !instance) {
        return
    }

    let lastTwoDigits = 0
    if (number >= 10) {
        lastTwoDigits = +number.toString().slice(-2)
    }

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return instance.language === 'en' ? 'movies' : 'фильмов'
    }

    const stringifiedNum = number.toString()
    const lastDigit = +stringifiedNum[stringifiedNum.length - 1]

    let filmWord = ''
    switch (lastDigit) {
        case 1:
            filmWord = instance.language === 'en' ? 'movie' : 'фильм'
            break
        case 2:
        case 3:
        case 4:
            filmWord = instance.language === 'en' ? 'movies' : 'фильма'
            break
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            filmWord = instance.language === 'en' ? 'movies' : 'фильмов'
            break
        default:
            break
    }

    return filmWord
}
