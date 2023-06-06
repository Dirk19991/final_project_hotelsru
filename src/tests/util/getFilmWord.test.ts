import getFilmWord from '@/util/getFilmWord'
import { i18n } from 'i18next'

const mockRu = {
    language: 'ru',
} as i18n

const mockEn = {
    language: 'en',
} as i18n

it('returns correct word', () => {
    expect(getFilmWord(null)).toEqual(undefined)
    expect(getFilmWord(12, mockRu)).toEqual('фильмов')
    expect(getFilmWord(12, mockEn)).toEqual('movies')
    expect(getFilmWord(1, mockRu)).toEqual('фильм')
    expect(getFilmWord(1, mockEn)).toEqual('movie')
    expect(getFilmWord(2, mockRu)).toEqual('фильма')
    expect(getFilmWord(2, mockEn)).toEqual('movies')
    expect(getFilmWord(6, mockRu)).toEqual('фильмов')
    expect(getFilmWord(6, mockEn)).toEqual('movies')
    expect(getFilmWord(22, mockRu)).toEqual('фильма')
    expect(getFilmWord(22, mockEn)).toEqual('movies')
})
