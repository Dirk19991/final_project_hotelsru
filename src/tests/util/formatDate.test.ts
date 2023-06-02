import { FormatDate } from '@/util/formatDate'

it('returns formatted date', () => {
    const date1 = new Date(2023, 1, 2)
    const date2 = new Date(2019, 2, 3)
    expect(FormatDate(date1)).toEqual('2 февраля 2023')
    expect(FormatDate(date2)).toEqual('3 марта 2019')
})
