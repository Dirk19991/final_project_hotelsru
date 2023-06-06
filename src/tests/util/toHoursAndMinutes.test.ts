import toHoursAndMinutes from '@/util/toHoursAndMinutes'
import { i18n } from 'i18next'

const mockRu = {
    language: 'ru',
} as i18n

const mockEn = {
    language: 'en',
} as i18n

it('returns correct time', () => {
    expect(toHoursAndMinutes('55', mockRu)).toEqual('0 ч. 55 мин.')
    expect(toHoursAndMinutes('55', mockEn)).toEqual('0 h. 55 m.')
    expect(toHoursAndMinutes('133', mockRu)).toEqual('2 ч. 13 мин.')
    expect(toHoursAndMinutes('133', mockEn)).toEqual('2 h. 13 m.')
})
